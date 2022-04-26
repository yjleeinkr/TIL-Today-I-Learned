const express = require('express')
const app = express()
const router = require('./routes/index.js')

app.use(express.urlencoded({ extended: true }))
app.use('/api', router)

app.listen(4000);