// GET  -- POST -- PUT -- DELETE

const http =require('http')
const port = 3000
const myServer = http.createServer((request, response)=>{
    if(request.method === 'GET'){
        if(request.url === '/'){
            response.write("<h1>Welcome to HOME page</h1>")
        }else if(request.url === '/Contact'){
            response.write("<h1>Welcome to CONTACT page</h1>")
        }else{
            response.write("<h1>404 the page not found...</h1>")
        }
    }
})

myServer.listen(port)