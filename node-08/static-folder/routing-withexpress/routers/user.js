const express = require('express')
const router = express.Router()

//router.get('/user', (req, res)=>{res.send('Hello USERS... ')})
//router.get('/user/:id', (req, res)=>{res.send(req.params)})
router.get('/user/:id?/:jobId?', (req, res)=>{res.send('Id= ' + req.params.id + ' Job ID= '+ req.params.jobId)})
router.post('/user', (req, res, next)=>{
  const user = false;
  if (user) {
    res.send('HELLO USERS from POST method...')
  } else {
    return next({status:404, message: 'The user was not found....'})
  }
  
})


module.exports = router;


module.exports = router;