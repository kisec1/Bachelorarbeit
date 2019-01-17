const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// TestProcedure Schema
const TestProcedureSchema = mongoose.Schema({
    model: {
        type: String,
        required: true
    },
    version: {
        type: String,
        required: true
    },
});

const TestProcedure = module.exports = mongoose.model('TestProcedure', TestProcedureSchema);

module.exports.getTestProcedureByModel = function (model, callback) {
    console.log(model);
    TestProcedure.findOne({'model': model},  callback);
}

module.exports.getAll = function (callback) {
    TestProcedure.find(callback);
}