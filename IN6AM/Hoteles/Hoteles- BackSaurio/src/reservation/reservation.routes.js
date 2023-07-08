
'use strict'

const express = require('express');
const api = express.Router();
const reservationController = require('./reservation.controller');
const { ensureAuth, isAdmin } = require('../services/authenticated');

api.get('/get', [ensureAuth, isAdmin], reservationController.get);
api.post('/create', [ensureAuth, isAdmin], reservationController.create);
api.put('/update/:id', [ensureAuth, isAdmin], reservationController.update);
api.delete('/delete/:id', [ensureAuth, isAdmin], reservationController.delete);


module.exports = api;