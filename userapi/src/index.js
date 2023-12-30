const express = require('express');
const connectDB = require('../config/database');
const bodyParser = require('body-parser');
const currencyRouter = require('./routes/currencyRoutes');
const userRoutes = require('./routes/user'); 

const app = express();
const port = process.env.PORT || 3000;

connectDB();

// Middleware pour parser le body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Servir les fichiers statiques du dossier 'public'
app.use(express.static('public'));

// Route d'accueil (peut être utilisée pour servir votre page de conversion de devises)
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Utiliser le routeur pour les utilisateurs
app.use('/users', userRoutes);

// Utiliser le routeur pour la conversion de devises
app.use('/currency', currencyRouter);

// Démarrage du serveur
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
