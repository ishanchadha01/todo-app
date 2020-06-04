const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    length: {
        type: Number,
        required = true,
    },
    status: {
        type: String,
        required: true,
    },
    user: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('Task', taskSchema);