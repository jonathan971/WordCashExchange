const express = require('express');
const supertest = require('supertest');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Route / is working' });
});

app.get('/users', (req, res) => {
  res.status(200).json({ message: 'Route /users is working' });
});

describe('Testing Routes', () => {
  let request;

  beforeEach(() => {
    request = supertest(app);
  });

  it('should test the / route', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Route / is working');
  });

  it('should test the /users route', async () => {
    const response = await request.get('/users');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Route /users is working');
  });
});
