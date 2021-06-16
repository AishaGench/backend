const express = require('express')
const router = express.Router()

const BookModel = require('../models/Book')

// Snippet -> node-express-get
router.get('/', (req, res) => {
  res.send('GET request to the BOOK PAGE')
})

// POST, snippet->  node-express-post
router.post('/', function (req, res) {
  const newBook = new BookModel(req.body)
  newBook.save()
  .then(result=>res.json(result))
  .catch(err => res.json(err))
})

module.exports = router