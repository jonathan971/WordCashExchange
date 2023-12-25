const express = require('express');
const { MongoClient } = require("mongodb");
const router = require('./router');

const uri = 'mongodb+srv://jonathanvelin:105Dalciat@cluster0.seiub71.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri);


async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("Connected successfully to MongoDB");
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}

const app = express();
const port = 3000;

//app.use(express.static('public'));
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use('/', router()); 

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  connectToMongoDB();
});
