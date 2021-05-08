const todos = require('../modals/todo')

const createTodo = async (req, res) => {
  const { id, userId, title, completed } = req.body
  const newData = new todos({ id, userId, title, completed })
  try {
    newData.save()

    res.status(201).json(newData)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

module.exports = { createTodo }
