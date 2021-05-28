const express = require('express')
const app = express()
const port = 3000

//GET POST PUT DELETE  ---> ALL
app.get('/', (req, res) => res.send('Hello World from HOME!'))
//app.get('/contact', (req, res) => res.send('Hello World from CONTACT!'))

// ? => optional
//app.get('/co?nta?ct', (req, res) => res.send('Hello World from CONTACT!'))
app.get('/co(nta)?ct', (req, res) => res.send('Hello World from CONTACT!'))

// * -> anything
//app.get('/con*tact', (req, res) => res.send('Hello World from CONTACT!'))

// + -> repeat character
app.get('/conta+ct', (req, res) => res.send('Hello World from CONTACT!'))

app.listen(port, () => console.log(`Example app listening on port port!`))