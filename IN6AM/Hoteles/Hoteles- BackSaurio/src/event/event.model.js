'use strict'

const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    }
    
})

module.exports = mongoose.model('Event', eventSchema);
