const express = require('express')
const router = express.Router()

router.post('/user/join', (req, res) => {
  console.log(req.body)
})

module.exports = router