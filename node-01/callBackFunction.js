function sayFirst(text, callback){
    setTimeout(()=>{
console.log(text)
callback()
    },2000)
}
function saySecond(){
    console.log("Bye...")
}

sayFirst("Hello...", saySecond)
