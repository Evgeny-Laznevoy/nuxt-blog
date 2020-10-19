const { strict } = require('assert');
const mongoose = require('mongoose');
const path = require('path');

const coverImageBasePath = 'uploads/blog';

const blog = new mongoose.Schema ({
    h1: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    introText: {
        type: String
    },
    url: {
        type: String
    },
    tag: {
        type: String
    },
    like: {
        type: Number
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
    },
    coverImageName: {}
})

blog.virtual("coverImagePath").get(function() {
    if (this.coverImageName != null) {
        return path.join('/', coverImageBasePath, this.coverImageName)
    }
})

module.exports = mongoose.model('blog', blog);
module.exports.coverImageBasePath = coverImageBasePath;