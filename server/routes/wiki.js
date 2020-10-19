const express = require('express')
const router = express.Router()
const Wiki = require('../models/wiki')

router.get('/', async (req, res) => {
  try {
    const wikis = await Wiki.find()
    await res.json(wikis)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.post('/', async (req, res) => {
    const wikis = new Wiki({
        h1: req.body.h1,
        title: req.body.title,
        description: req.body.description,
        url: req.body.url,
        content: req.body.content
    })
    try {
        const newWiki = wikis.save()
        await res.status(201).json(newWiki)
      } catch (err) {
        res.status(400).json({ message: err.message })
      }
})

module.exports = router