const fs = require('fs')

fs.unlink('demoNew.txt', (err)=>{
  if(err) {
    console.log("The file cannot be deleted: ", err)
  }
})