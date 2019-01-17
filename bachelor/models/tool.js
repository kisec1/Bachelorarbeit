const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// Tool Schema
const ToolSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const Tool = module.exports = mongoose.model('Tool', ToolSchema);

module.exports.getToolsByUserName = function (userName, callback) {
    Tool.find({'userName': userName},  callback);
}

module.exports.addTool = function (newTool, callback) {
    newTool.save(callback);
}

module.exports.deleteTool = function (id, callback) {
    Tool.remove({ _id: id }, callback);
}




