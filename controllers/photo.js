const photos = require('../modals/photo')

const createPhoto = async (req, res) => {
  const { id, albumId, title, url } = req.body
  const newData = new photos({ id, title, albumId, url })
  try {
    newData.save()

    res.status(201).json(newData)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

module.exports = { createPhoto }
