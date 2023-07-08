'use strict'

const express = require('express');
const api = express.Router();
const bedroomController = require('./bedroom.controller');
const { ensureAuth, isAdmin } = require('../services/authenticated');

api.get('/', bedroomController.test);
api.get('/get', [ensureAuth], bedroomController.getBedroom);
api.post('/create', [ensureAuth, isAdmin], bedroomController.create);
api.put('/update/:id', [ensureAuth, isAdmin], bedroomController.updateBedroom);
api.delete('/delete/:id', [ensureAuth, isAdmin], bedroomController.deleteBedroom);

module.exports = api;