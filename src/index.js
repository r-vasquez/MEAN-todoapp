const express = require('express')
const app = express()

// Settings
app.set('port', process.env.PORT || 9000)
const { ToDos } = require('./db-connection')

// Middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json)

// Routes

// Starting Server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`)
})
