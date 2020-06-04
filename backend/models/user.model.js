const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    uid: {
        type: Number,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
});

module.exports = mongoose.model('User', userSchema);