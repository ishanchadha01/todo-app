const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    username: {
        title: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: false,
        },
        description: {
            type: String,
            required: false,
        },
        date: {
            type: String,
            required: false,
        },
    },
});

module.exports = mongoose.model('User', userSchema);