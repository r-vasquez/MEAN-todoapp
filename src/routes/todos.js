const { Router } = require('express')
const router = Router()
const { ToDos } = require('../db-connection')

//API

// To get all To-Dos
router.get('/', async (req, res) => {
  try {
    // Using mongoose find to get all the todos
    const queryResult = await ToDos.find({})
    console.log('try')
    res.json(queryResult)
  } catch (error) {
    res.status(500)
    console.error(error)
  }
})

// Creating a new To-Do
router.post('/', function (req, res) {
  try {
    ToDos.insertMany({
      todo: 'Here comes the ToDo from the front-end'
    })
    console.log('To-Do Posted')
  } catch (error) {
    console.error(error)
  }
  res.redirect('/')
})

// Deleting a To-Do
router.delete('/:todo_id', (req, res) => {
  try {
    ToDos.deleteOne(
      {
        _id: req.params.todo_id
      },
      function (err) {
        console.log('no hice delete')
        console.error(err)
      }
    )
    res.json({ message: 'Movie Deleted' })
  } catch (error) {
    console.log('Me pase al catch')
    console.error(error)
  }
})

module.exports = router
