const express = require('express')
const router = express.Router()
const Record = require('../models/Record')

router.get('/', async (req, res) => {
  try {
    const blogs = await Record.find()
    await res.json(blogs)
    // res.send("test1");
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

module.exports = router
