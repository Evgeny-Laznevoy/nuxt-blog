const express = require('express')
const router = express.Router()
const Service = require('../models/Services')

router.get('/', async (req, res) => {
  try {
    const services = await Service.find()
    await res.json(services)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.post('/', async (req, res) => {
    const services = new Service({
        h1: req.body.h1,
        title: req.body.title,
        description: req.body.description,
        url: req.body.url,
        content: req.body.content
    })
    try {
        const newServices = services.save()
        await res.status(201).json(newServices)
      } catch (err) {
        res.status(400).json({ message: err.message })
      }
})

module.exports = router