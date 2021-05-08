const mongoose = require('mongoose')
const PhotoSchema = mongoose.Schema({
  albumId: Number,
  id: Number,
  title: String,
  url: String,
})

const photos = mongoose.model('photos', PhotoSchema)
module.exports = photos
