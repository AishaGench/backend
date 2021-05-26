const fs = require('fs')
const file = 'video.mp4'

const readStream = fs.createReadStream(file)
const writeStream = fs.createReadStream('NewVideo.mp4')

readStream.pipe(writeStream)

writeStream.on('finish',()=>{
    console.log("New file has been created");
})

