const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  todo: String,
  priority: String,
  dueDate: Date
})

module.exports = userSchema
