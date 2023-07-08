'use strict'

const express = require('express');
const api = express.Router();
const billController = require('./bill.controller');
const { ensureAuth, isAdmin } = require('../services/authenticated');

api.get('/', billController.test)
api.get('/get', [ensureAuth], billController.get);
api.get('/get/:id', [ensureAuth], billController.getBenefit);
api.post('/create', [ensureAuth, isAdmin], billController.create);
api.put('/update/:id', [ensureAuth, isAdmin], billController.update);
api.delete('/delete/:id', [ensureAuth, isAdmin], billController.delete);

module.exports = api;