const express = require('express');
const supertest = require('supertest');
const mongoose = require('mongoose');
const User = require('../src/models/user');
const { MongoMemoryServer } = require('mongodb-memory-server');

const app = express();
let mongoServer;
const request = supertest(app);

beforeAll(async () => {
  mongoServer = new MongoMemoryServer();
  await mongoServer.start();
  const mongoUri = await mongoServer.getUri();
  await mongoose.connect(mongoUri, { useNewUrlParser: true });
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

// Route pour créer un utilisateur
app.use(express.json());

app.post('/users', async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Tous les champs doivent être remplis' });
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ error: 'Cet e-mail est déjà utilisé' });
  }

  const user = new User({ name, email });
  await user.save();

  res.status(201).json(user);
});

app.delete('/users/:email', async (req, res) => {
  const { email } = req.params;

  const user = await User.findOneAndDelete({ email });

  if (!user) {
    res.status(404).json({ error: 'Utilisateur non trouvé' });
  } else {
    res.status(204).send();
  }
});

app.get('/users/:email', async (req, res) => {
  const { email } = req.params;

  const user = await User.findOne({ email });

  if (!user) {
    res.status(404).json({ error: 'Utilisateur non trouvé' });
  } else {
    res.status(200).json(user);
  }
});

describe('CRUD Tests for Users', () => {
  it('should create a new user with valid data', async () => {
    const response = await request.post('/users').send({
      name: 'John Doe',
      email: 'john@example.com',
    });
    expect(response.status).toBe(201);
    expect(response.body.name).toBe('John Doe');
  });

  it('should fail to create a new user with missing fields', async () => {
    const response = await request.post('/users').send({
      name: 'John Doe',
    });
    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Tous les champs doivent être remplis');
  });

  it('should fail to create a new user with an existing email', async () => {
    const createUserResponse = await request.post('/users').send({
      name: 'Existing User',
      email: 'existing@example.com',
    });

    const response = await request.post('/users').send({
      name: 'John Doe',
      email: 'existing@example.com',
    });

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Cet e-mail est déjà utilisé');
  });

  it('should delete a user by email', async () => {
    const createUserResponse = await request.post('/users').send({
      name: 'UserToDelete',
      email: 'delete@example.com',
    });

    const response = await request.delete('/users/delete@example.com');
    expect(response.status).toBe(204);

    const getUserResponse = await request.get('/users/delete@example.com');
    expect(getUserResponse.status).toBe(404);
    expect(getUserResponse.body.error).toBe('Utilisateur non trouvé');
  });

  it('should get a user by email', async () => {
    const createUserResponse = await request.post('/users').send({
      name: 'UserToGet',
      email: 'get@example.com',
    });

    const response = await request.get('/users/get@example.com');
    expect(response.status).toBe(200);
    expect(response.body.email).toBe('get@example.com');
  });
});
