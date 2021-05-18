function sayFirst(callback){
    setTimeout(()=>{
        console.log("1- First Bye...")
        callback()
    },2000)
  
}
function saySecond(){
    console.log("2- Second Bye...")
    sayThird()
}
function sayThird(){
    console.log("3- Third Bye...")
}

// sayFirst()
// saySecond()
// sayThird()
sayFirst(saySecond)