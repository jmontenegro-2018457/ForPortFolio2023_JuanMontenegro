const express = require('express');
const api = express.Router();
const cellarsController = require('./cellars.controller');
const { ensureAuth, isAdmin } = require('../services/authenticated');
const connectMultiparty = require('connect-multiparty');
const upload = connectMultiparty({uploadDir: './uploads/cellars'})


//RUTAS PÚBLICAS
api.get('/', cellarsController.test); 

//RUTA PRIVADA PERO ACCESIBLE A CUALQUIER ROL
api.post('/search', ensureAuth, cellarsController.search);
api.post('/availability', ensureAuth, cellarsController.availability);
api.get('/get',[ensureAuth],cellarsController.get);
api.get('/get/:id',[ensureAuth],cellarsController.getCellar)


//RUTAS PRIVADAS DE ADMINISTRADOR
api.post('/add', [ensureAuth, isAdmin], cellarsController.addCellars); //RUTA PRIVADA POR ROL/*
api.put('/update/:id', [ensureAuth, isAdmin], cellarsController.updateCellar);
api.delete('/delete/:id', [ensureAuth, isAdmin], cellarsController.deleteCellar);
api.put('/upload-image/:id', upload, cellarsController.uploadImage);
api.get('/get-image/:fileName', upload, cellarsController.getImage);


module.exports = api;