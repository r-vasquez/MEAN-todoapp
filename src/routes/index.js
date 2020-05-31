const { Router } = require('express')
const router = Router()

router.get('/', async (req, res) => {
  const response = {
    message: 'hola desde Index'
  }

  res.json(response)
})

module.exports = router
