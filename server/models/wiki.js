const mongoose = require('mongoose');

const wiki = new mongoose.Schema ({
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
    youTube: {
        type: String
    },
    create_date: {
        type: Date,
        default: Date.now
    },
    content: {
        type: String
    }
})

module.exports = mongoose.model('wiki', wiki);