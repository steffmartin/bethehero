const express = require('express');

const routes = express.Router();

routes.get('/', (request, response) => {
    return response.json({
        evento: 'Semana OminiStack 11.0',
        aluno: 'Steffan M. Alves'
    });
});

module.exports = routes;