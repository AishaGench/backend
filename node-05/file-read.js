const fs = require('fs')

fs.readFile('demo.txt',(error,data)=>{
    if(error){
        console.log("An error occured during reading the file: ", error)
    }
    console.log(data.toString())
})
console.log("File read ends....")