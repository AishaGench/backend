const express = require('express')
const app = express()
const port = 3000

//GET POST PUT DELETE  ---> ALL
app.get('/', (req, res) => res.send('Hello World from HOME!'))
// '/' => 'Localhost:3000'
//app.get('/contact', (req, res) => res.send('Hello World from CONTACT!'))

// ? => optional
//app.get('/co?nta?ct', (req, res) => res.send('Hello World from CONTACT!'))
app.get('/co(nta)?ct', (req, res) => res.send('Hello World from CONTACT!'))

// * => anything
//app.get('/con*tact', (req, res) => res.send('Hello World from CONTACT!'))

// + => repeat character
app.get('/conta+ct', (req, res) => res.send('Hello World from CONTACT!'))
// '/contact'  => 'Localhost:3000/contact'

app.get('/about',(request,response) =>response.send('HELLO ABOUT PAGE from GET request'))
app.post('/about',(request,response) =>response.send('HELLO ABOUT PAGE from POST request'))
app.put('/about',(request,response) =>response.send('HELLO ABOUT PAGE from PUT request'))
app.delete('/about',(request,response) =>response.send('HELLO ABOUT PAGE from DELETE request'))
app.all('/about',(request,response) =>response.send('HELLO ABOUT PAGE from ALL request'))
//if we put all request at the top another request doesnt work 



app.listen(port, () => console.log(`Example app listening on port port!`))