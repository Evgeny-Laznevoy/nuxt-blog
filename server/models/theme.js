const mongoose = require('mongoose');

const theme = new mongoose.Schema ({
    h1: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    intro: {
        type: String
    },
    url: {
        type: String,
        unique: true,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    },
    content: {
        type: String
    },
    views: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('theme', theme);