const express = require('express')
const router = express.Router()
const Blog = require('../models/blog')
const multer = require('multer')
const path = require('path')
const fs = require('fs')


const uploadPath = path.join('static', Blog.coverImageBasePath)
const imageNameTypes = ['image/jpeg', 'image/png']
var storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, uploadPath)
  },
  filename: function(req, file, cb){ 
    cb(null, Date.now() + file.originalname)
  }
})

const upload = multer({
  storage: storage,
  fileFilter: (req, file, callback) => { 
    callback(null, imageNameTypes.includes(file.mimetype))
  }
})


router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find()
    .select('h1 introText coverImageName url tag')
    .sort('-create_date')
    .exec()
    await res.json(blogs)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.post('/', async (req, res) => {
    const blogs = new Blog({
        h1: req.body.h1,
        title: req.body.title,
        description: req.body.description,
        url: req.body.url,
        content: req.body.content
    })
    try {
        const newBlogs = blogs.save()
        await res.status(201).json(newBlogs)
      } catch (err) {
        res.status(400).json({ message: err.message })
      }
})

module.exports = router