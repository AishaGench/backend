const http = require('http')
const port = 3000
const myServer = http.createServer((request, response)=>{
  console.log(request.url)
  console.log(request.headers)
  response.writeHead(200, {'content-type': 'text/html;charset=utf-8'})
  //response.write("<b>Hello World </b> Ü, Ğ, İ, Ş, Ç, Ö from HTTP Server....")
  response.end("<b>Hello World </b> Ü, Ğ, İ, Ş, Ç, Ö from HTTP Server from NODEMON....")
})

myServer.listen(port)