const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// Client Schema
const ClientSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    street:{
        type: String,
        required: true
    },
    houseNr: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    }
});

const Client = module.exports = mongoose.model('Client', ClientSchema);

module.exports.getClientById = function (id, callback) {
    Client.findById(id, callback);
}

module.exports.getAll = function (callback) {
    Client.find(callback);
}