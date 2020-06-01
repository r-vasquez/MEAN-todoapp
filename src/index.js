const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

// Settings
app.set('port', process.env.PORT || 3000)
app.set('json spaces', 2)
const { ToDos } = require('./db-connection')

// Middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors({ origin: 'http://localhost:4200' }))

// Routes
app.use(require('./routes/index'))
app.use('/api/todos', require('./routes/todos'))

// Starting Server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`)
})
