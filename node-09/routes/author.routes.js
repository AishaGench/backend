const express = require('express')
const router = express.Router()

// Snippet -> node-express-get
app.get('/', (req, res) => {
  res.send('GET request to the homepage')
})

// Snippet -> node-express-post
app.post('/', function (req, res) {
    const newAuthor = new AuthorModel(req.body)
    newAuthor.save()
    .then(result =>res.json(result))
    .catch(err=>res.json(err))
})
module.exports = router
 