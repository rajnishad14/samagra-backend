const mongoose = require('mongoose')
const commentSchema = mongoose.Schema({
  postId: Number,
  id: Number,
  name: String,
  email: String,
  body: String,
})

const comment = mongoose.model('comment', commentSchema)
module.exports = comment
