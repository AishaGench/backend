const express = require('express')
const router = express.Router()

// GET POST PUT DELETE ---> ALL
router.get('/', (req, res) => res.send('GET REQUEST=> Hello World from HOME!'))
router.post('/', (req, res) => res.send('POST REQUEST=> Hello World from HOME!'))
router.put('/', (req, res) => res.send('PUT REQUEST=> Hello World from HOME!'))
router.delete('/', (req, res) => res.send('DELETE REQUEST=> Hello World from HOME!'))
// '/' ---> 'localhost:3000'

module.exports = router;