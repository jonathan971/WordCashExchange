'use strict';

const express = require('express');

const PORT = 3000;

const app = express();
app.get('/', (req, res) => {
  res.send('Jojo an Docker la');
});

app.listen(PORT);
console.log(`Running on http://localhost:${PORT}`);
