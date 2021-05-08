const posts = require('../modals/post')

const createPost = async (req, res) => {
  const { id, userId, title, body } = req.body
  const newData = new posts({ id, userId, title, body })
  try {
    newData.save()

    res.status(201).json(newData)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

module.exports = { createPost }
