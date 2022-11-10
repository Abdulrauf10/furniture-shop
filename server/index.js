const express = require('express')
const app = express()
const cors = require('cors')
const { PORT= 5000 }  = process.env

app.use(express.json())
app.use(cors())

const router = require('./router/route')
app.use(router)

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`)
})