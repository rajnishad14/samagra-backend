const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const app = express()

const CONNECTION_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@clustor0.maus9.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
const port = process.env.PORT || 3002

// middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//routes import
const commentRoute = require('./routes/comment')
const photoRoute = require('./routes/photo')
const postRoute = require('./routes/post')
const todoRoute = require('./routes/todo')
//route middlewares
app.use('/comment', commentRoute)
app.use('/photo', photoRoute)
app.use('/post', postRoute)
app.use('/todo', todoRoute)

//routes
app.get('/', (req, res) => {
  res.send('Hello this is root')
})

//mongoose
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log('server is running at port:', port)
    })
  })
  .catch((error) => {
    console.log(error)
  })
