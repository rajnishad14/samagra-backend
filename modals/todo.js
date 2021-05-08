const mongoose = require('mongoose')
const todoSchema = mongoose.Schema({
  userId: Number,
  id: Number,
  title: String,
  completed: Boolean,
})

const todos = mongoose.model('todos', todoSchema)
module.exports = todos
