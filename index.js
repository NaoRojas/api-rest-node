const connectDB = require('./database/connection')
const express = require('express')
const cors = require('cors')

// Connect to MongoDB
connectDB()

// Create Node Server
const app = express()
const PORT = 3900

// Middleware for JSON body parsing
app.use(cors())

// Covert body to JSON
app.use(express.json())

// Create routes
app.get('/test', (req, res) => {
  res.send('Hello World')
})

// Create server and listen http requests
app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT)
})