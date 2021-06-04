const express = require('express')
const app = express()
const port = 3000
/*
app.use((request, middleRes, next)=>{
  const isAuthorized = false;
  if(isAuthorized) {
    next()
  } else {
    middleRes.send('You have no authorization to see this page. Please Login... Request from '+ request.url)
  }
})

*/

const isAuth = require('./helpers/isAuth')
//app.use('/about', isAuth)   // Add middleware to only about.js
//app.use(isAuth) // Add middleware to all pages

const home = require('./routers/home')
app.use('/', home)
const user = require('./routers/user')
app.use('/', user)
const about = require('./routers/about')
app.use('/', about)
const contact = require('./routers/contact')
app.use('/api/', contact)

app.use((error, request, errMidRes, next)=>{
  errMidRes.status(error.status);
  errMidRes.render('error.pug',{message:error.message,status:error.status})
})









//app.listen(port)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))