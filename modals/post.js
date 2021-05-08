const mongoose = require('mongoose')
const postSchema = mongoose.Schema({
  userId: Number,
  id: Number,
  title: String,
  body: String,
})

const posts = mongoose.model('posts', postSchema)
module.exports = posts
