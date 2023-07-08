'use strict'

const mongoose = require('mongoose');

const cellarsSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    size:{
        type: String,
        required: true
    },
    availability:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    image:{
        type: String,
    }
})

module.exports = mongoose.model('Cellars', cellarsSchema);