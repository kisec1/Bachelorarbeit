const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// Device Schema
const DeviceSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    serial:{
        type: String,
        required: true
    },
    description_umdns: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    account: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    clientId: {
        type: Number,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    nextCheck: {
        type: String,
        required: true
    },
    lastCheck: {
        type: String,
        required: true
    }
});

const Device = module.exports = mongoose.model('Device', DeviceSchema);

module.exports.getDeviceById = function (id, callback) {
    Device.findById(id, callback);
}

module.exports.getAll = function (callback) {
    Device.find(callback);
}

module.exports.getAllByClientId = function (clientId, callback) {
    Device.find({'clientId': clientId},  callback);
}
