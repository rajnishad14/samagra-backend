const express = require('express')
const { createTodo } = require('../controllers/todo')
const router = express.Router()

router.post('/', createTodo)

module.exports = router
