const express = require('express');
const authentication = require('./authentication');

const router = express.Router();

const configureRoutes = () => {
    authentication(router);
    return router;
};

module.exports = configureRoutes;
