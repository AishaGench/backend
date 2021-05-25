const fs =require('fs')
const http = require('http')

const myServer = http.createServer((req,res)=>{
    fs.readFile('test.html',(error, data)=>{
        if(error){
            console.log(error);
        }
        res.end(data);
    })
})

myServer.listen(5000) //myServer.listen('5000')