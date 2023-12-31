const express = require('express');
const connectDB = require('../config/database');
const bodyParser = require('body-parser');
const currencyRouter = require('./routes/currencyRoutes');
const userRoutes = require('./routes/user'); 
const { specs, swaggerUi } = require('./swagger-config');

const app = express();
const port = process.env.PORT || 3000;

connectDB();

// Middleware pour parser le body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(express.static('public'));

// Route d'accueil
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Routeur pour les utilisateurs
app.use('/users', userRoutes);

// Routeur pour la conversion de devises
app.use('/currency', currencyRouter);

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
