const express = require('express')

const app = express()

app.get('/', (request, response)=>{
    response.send('Hello world from ExpressJS..')
})

app.listen(3000)