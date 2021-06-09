const express = require('express')
const router = express.Router()
const PostModel = require('../models/Post')

// Created by node-express-post snippet
router.post('/', function (req, res) {
    const myPostModel = new PostModel({
      title: "My New Title 11",
      subTitle:"My new subTitle",
    //createdDate: Date.now(),
      isActive: false,
      meta:{votes: 85, favs: 10},
      comments: [
        {message:"Good job!!!"},
        {message:"I didn't like..."}
      ]
  
    })
    myPostModel.save((err, data)=>{
      if(err) res.json(err)
      res.json(data)
    })
    //res.send('POST request to the homepage')
  })
  
  module.exports = router