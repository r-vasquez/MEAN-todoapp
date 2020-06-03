const { Router } = require('express')
const router = Router()
const { ToDos } = require('../db-connection')

//API

// To get all To-Dos
router.get('/', async (req, res) => {
  try {
    // Using mongoose find to get all the todos
    const queryResult = await ToDos.find({})
    res.json(queryResult)
  } catch (error) {
    res.status(500)
    console.error(error)
  }
})

// Creating a new To-Do
router.post('/', function (req, res) {
  try {
    ToDos.insertMany(req.body)
    res.json({
      message: 'ToDo Saved',
      data: req.body
    })
  } catch (error) {
    res.json({
      message: 'Failed to Create ToDo'
    })
    console.error(error)
  }
})

// Updating a ToDo
router.put('/:todo_id', async (req, res) => {
  const { todo_id } = req.params
  const updatedTodo = {
    todo: req.body.todo,
    priority: req.body.priority,
    dueDate: req.body.dueDate
  }
  await ToDos.findByIdAndUpdate(todo_id, { $set: updatedTodo }, { new: true })
  res.json({
    message: 'ToDo Updated'
  })
})

// Deleting a To-Do
router.delete('/:todo_id', (req, res) => {
  try {
    ToDos.deleteOne(
      {
        _id: req.params.todo_id
      },
      function (err) {
        console.error(err)
      }
    )
    res.json({
      message: 'ToDo Deleted'
    })
  } catch (error) {
    res.json({
      message: 'Failed to delete ToDo'
    })
    console.error(error)
  }
})

module.exports = router
