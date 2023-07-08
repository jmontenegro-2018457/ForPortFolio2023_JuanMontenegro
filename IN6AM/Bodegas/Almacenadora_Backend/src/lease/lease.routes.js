'use strict'

const express = require('express');
const api = express.Router();
const leaseController = require('./lease.controller');
const { ensureAuth, isAdmin } = require('../services/authenticated');

api.get('/', leaseController.test);
api.post('/save',[ensureAuth], leaseController.saveLease);
api.get('/get/:id', [ensureAuth], leaseController.getLeaseByUser);
api.get('/get', [ensureAuth],leaseController.getLeases);
api.put('/update/:id', [ensureAuth, isAdmin], leaseController.updateLease);
api.delete('/delete/:id',[ensureAuth], leaseController.deleteLease);

module.exports = api;