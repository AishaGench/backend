const viewNumber = () =>{
    return new Promise((resolve, reject) =>{
        resolve("It is resolved...")
        reject("It is rejected")
    })
}
viewNumber()
        .then((data)=>{console.log(data);return 2})
        .then((data)=>{console.log(data);return 4})
        .then((data)=>{console.log(data);return 6})
        .then((data)=>{console.log(data);return 8})
        .then((data)=>{console.log(data);return 10})