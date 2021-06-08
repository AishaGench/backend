const express = require('express')
const router = express.Router()
const PostModel = require('../models/Post')

//created by node-express-post snoppet
router.post('/', function (req, res) {
    const myPostModel = new PostModel({
        title:"My New Title 2",
        createDate: Date.now()
    })
    myPostModel.save((error, data)=>{
        if(error)res.json(error)
        res.json(data)
    })
  //res.send('POST request to the homepage')
})


module.exports = router