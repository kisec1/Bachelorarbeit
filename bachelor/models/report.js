const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// Report Schema
const ReportSchema = mongoose.Schema({
    state: {
        type: String,
        required: true
    },
    work: {
        type: Array,
        required: true
    },
    device: {
        type: JSON,
        required: true
    },
    client: {
        type: JSON,
        required: true
    },
    technician: {
        type: String,
        required: true
    },
    testProcedure: {
        type: JSON,
        required: true
    },
    tools: {
        type: Array
    },
    comment: {
        type: String
    },
    corrections: {
        type: JSON
    },
    serviceKit: {
        type: String
    },
    spareParts: {
        type: Array
    },
    date: {
        type: String
    }
});

const Report = module.exports = mongoose.model('Report', ReportSchema);

module.exports.getAll = function (callback) {
    Report.find(callback);
}

module.exports.getUnfinished = function (callback) {
    Report.find({'state': 'unfinished'}, { client: 1, device: 1, technician: 1, date: 1 }, callback);
}

module.exports.addReport = function (newReport, callback) {
    console.log(newReport);
    newReport.save(callback);
}

module.exports.getReportById = function (id, callback) {
    Report.findOne({'_id':id}, callback);
}

module.exports.updateReport = function (newReport, callback) {
    Report.update({'_id': newReport._id}, newReport, callback);
}