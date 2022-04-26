const express = require('express')
const app = express()
const router = require('./routes/index.js')
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/api', router)

app.listen(4000);