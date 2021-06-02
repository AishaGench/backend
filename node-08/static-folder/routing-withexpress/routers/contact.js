const express = require('express')
const router = express.Router()

// router.get('/contact', (req, res) => res.send('Hello World from CONTACT!'))

// ? -> optional
// router.get('/co?nta?ct', (req, res) => res.send('Hello World from CONTACT!'))
//router.get('/co(nta)?ct', (req, res) => res.send('Hello World from CONTACT!'))

// * -> anything
//router.get('/con*tact', (req, res) => res.send('Hello World from CONTACT!'))

// + -> repeat character
router.get('/conta+ct', (req, res) => res.send('GET REQUEST=> Hello World from CONTACT!'))
// '/contact' ---> 'localhost:3000/contact'
router.post('/contact', (req, res) => res.send('POST REQUEST=> Hello World from CONTACT!'))
module.exports = router;