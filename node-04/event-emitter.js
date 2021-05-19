const events = require('events')
const eventEmitter = new events.EventEmitter()

eventEmitter.on('sayName',(text)=>{
    console.log('My name is ',text.name, 'I am', text.age, 'years old')
})

eventEmitter.emit('sayName',{name:"Aysegul", age:40})