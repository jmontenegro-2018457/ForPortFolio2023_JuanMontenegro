'use strict'

const hotelController = require('./hotel.controller');
const express = require('express');
const api = express.Router();
const { ensureAuth, isAdmin } = require('../services/authenticated');

api.post('/add', hotelController.addHotel)

module.exports = api;