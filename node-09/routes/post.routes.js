const express = require('express')
const router = express.Router()
const PostModel = require('../models/Post')

// Created by node-express-post snippet
router.post('/', function (req, res) {
    const myPostModel = new PostModel({
      title: "My New Title 6",
      createdDate: Date.now(),
      isActive: false,
      meta:{votes: 95, favs: 100},
      comments: [
        {message:"Good job!!!"},
        {message:"I didn't like..."}
      ]
  
    })
    myPostModel.save((error, data)=>{
      if(error) res.json(error)
      res.json(data)
    })
    //res.send('POST request to the homepage')
  })
  
  module.exports = router