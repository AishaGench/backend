const fs = require('fs')
// appendFile()     writeFile()
/*
fs.appendFile('demoNew.txt', "Hello World!!!\n", (err)=>{
  if(err){
    console.log("An error occured during creating file: ", err)
  }
  console.log("Adding data to the file has ended...")
})
*/
fs.writeFile('demoNew.txt', "Hello World!!!\n", (err)=>{
  if(err){
    console.log("An error occured during creating file: ", err)
  }
  console.log("Adding data to the file has ended...")
})