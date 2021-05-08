const express = require('express')
const { createPhoto } = require('../controllers/photo')
const router = express.Router()

router.post('/', createPhoto)

module.exports = router
