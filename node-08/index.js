const express = require('express')

const app = express()

app.get('/', (request, response)=>{response.send('Hello world from ExpressJS..')})
app.get('/about', (request, response)=>{response.send('Hello ABOUT PAGE from ExpressJS..')})

app.listen(3000,()=>[console.log('Express Server is running...')])