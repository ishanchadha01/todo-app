const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Types.ObjectId,
        required: false,
    },
    status: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Task', taskSchema);