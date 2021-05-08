const comment = require('../modals/comment')

const createComment = async (req, res) => {
  const { id, postId, name, email, body } = req.body
  const newData = new comment({ id, postId, name, email, body })
  try {
    newData.save()

    res.status(201).json(newData)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

module.exports = { createComment }
