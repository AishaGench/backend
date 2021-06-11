const express = require('express')
const router = express.Router()

// Snippet -> node-express-get
app.get('/', (req, res) => {
  res.send('GET request to the homepage')
})

module.exports = router
 