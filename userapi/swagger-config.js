// swagger-config.js
const swaggerGenerator = require('express-swagger-generator');

const expressSwagger = swaggerGenerator(app);
const options = {
  swaggerDefinition: {
    info: {
      description: 'Your API description',
      title: 'Your API',
      version: '1.0.0',
    },
    host: 'localhost:3000', // Remplacez par l'URL de votre application
    basePath: '/',
  },
  basedir: __dirname, // Chemin vers les contrôleurs de votre application
  files: ['../routes/**/*.js'], // Chemin vers les fichiers de votre API
};

expressSwagger(options);
