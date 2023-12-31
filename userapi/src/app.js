const express = require('express');
const connectDB = require('./config/database');
const bodyParser = require('body-parser');
const currencyRouter = require('./routes/currencyRoutes');
const userRoutes = require('./routes/user'); 

const app = express();

connectDB();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.use('/users', userRoutes);
app.use('/currency', currencyRouter);

module.exports = app;
