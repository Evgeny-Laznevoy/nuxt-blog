const express = require('express')
const router = express.Router()
const Theme = require('../models/theme')

router.get('/', async (req, res) => {
  try {
    const themes = await Theme.find()
    await res.json(themes)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.post('/', async (req, res) => {
    const themes = new Theme({
        h1: req.body.h1,
        title: req.body.title,
        description: req.body.description,
        url: req.body.url,
        content: req.body.content
    })
    try {
        const newThemes = themes.save()
        await res.status(201).json(newThemes)
      } catch (err) {
        res.status(400).json({ message: err.message })
      }
})

module.exports = router