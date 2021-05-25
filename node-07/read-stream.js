const fs = require('fs')
const file ='video.mp4'

const readStream =fs.createReadStream(file)

readStream.on('data',(chunk)=>{
    console.log('A chunk of data received...');
})

readStream.on('end',()=>{
    console.log("Data has been received completely...");
})