const http = require('http')

const myServer = http.createServer((request,response)=>{
    console.log(request.url)
    console.log(request.headers)
    response.writeHead(200, {'content-type': 'text/html;charset=utf-8'})
    response.write("<b> Hello World </b> Ü, Ğ, İ, Ş, Ç, Ö from HTTP Server...")
    response.end()
})

myServer.listen(3000)