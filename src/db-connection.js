const { model, connect, connection } = require('mongoose')

const todoSchema = require('./db-schema')
require('dotenv').config()

//Connection to MongoDB Atlas

connect(process.env.URI, {
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false
})
  .then(db => console.log('DB is connected'))
  .catch(err => console.error('Error during connection'))

connection.on('open', () => {
  console.log('DB is connected to', process.env.URI)
})

const ToDos = model('todoCollection', todoSchema)

module.exports = { ToDos }
