'use strict'

const mongoose = require('mongoose');

const bedroomSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    ability:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Bedroom', bedroomSchema);