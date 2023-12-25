const express = require('express');
const { login, register } = require ("../controllers/authentication");

module.exports = function(router) {
    router.post('/auth/register', register);
    router.post('/auth/login', login)
};