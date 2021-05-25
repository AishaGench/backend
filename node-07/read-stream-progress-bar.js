const fs = require('fs')
const file ='video.mp4'

let progress =0
const myReadStream = fs.createReadStream(file)

fs.stat(file,(error,data) =>{
    const total = data.size
    myReadStream.on('data', (chunk)=>{
        progress += chunk.length
        console.log(Math.floor((progress/total)*100), '%');
    })
    myReadStream.on('end',()=>{
        console.log('Data read has ended');
  })
})