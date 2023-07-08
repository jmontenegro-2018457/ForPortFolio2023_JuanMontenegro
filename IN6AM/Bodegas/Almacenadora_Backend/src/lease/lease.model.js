'use strict'

const mongoose = require('mongoose');

const leaseSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    total:{
        type: Number,
        required: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    cellar:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cellars',
        required: true
    }
})

module.exports = mongoose.model('Lease', leaseSchema);