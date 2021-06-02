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
    .post('/about',(request,response) =>response.send('HELLO ABOUT PAGE from POST request'))
    .put('/about',(request,response) =>response.send('HELLO ABOUT PAGE from PUT request'))
    .delete('/about',(request,response) =>response.send('HELLO ABOUT PAGE from DELETE request'))
    .all('/about',(request,response) =>response.send('HELLO ABOUT PAGE from ALL request'))
//if we put all request at the top another request doesnt work 

//app.get('/user/:id', (req, res)=>{res.send('Hello USERS... ')})
app.get('/user/:id', (req, res)=>{res.send(req.params)})
app.get('/user/:id/:jobId', (req, res)=>{res.send('Id= ' + req.params.id + ' Job ID= '+ req.params.jobId)})


app.listen(port, () => console.log(`Example app listening on port port!`))