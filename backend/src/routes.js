const express = require('express');
const routes = express.Router();
const ongController = require('./controllers/ong-controller');
const incidentsController = require('./controllers/incident-controller');
const profileController = require('./controllers/profile-controller');
const sessionController = require('./controllers/session-controller');

routes.post('/sessions', sessionController.create);

routes.post('/ongs', ongController.create);
routes.get('/ongs', ongController.index);
routes.get('/profile', profileController.index);

routes.post('/incidents', incidentsController.create);
routes.get('/incidents', incidentsController.index);
routes.delete('/incidents/:id', incidentsController.delete);

module.exports = routes; 