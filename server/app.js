require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")

// enable use of different domain in application
app.use(cors())

const PORT = process.env.PORT || 5500
app.listen(PORT, () => {
  console.log(`server is listening to port ${PORT}`)
})
