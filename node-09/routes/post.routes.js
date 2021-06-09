const express = require('express')
const router = express.Router()
const PostModel = require('../models/Post')

// Created by node-express-post snippet
router.post('/', function (req, res) {
  const myPostModel = new PostModel({
    title: "My New Title 11",
    subTitle: "My new subtitle 2",
    //createdDate: Date.now(),
    isActive: false,
    meta:{votes:54, favs: 45},
    comments: [
      {message:"Good job!!!"},
      {message:"It's fair..."}
    ]

  })
  myPostModel.save((error, data)=>{
    if(error) res.json(error)
    res.json(data)
  })
})

// Find() --> To get all data from the collection
/*
router.get('/', (req, res) => {
  PostModel.find((resultData,err)=>{
    if(err) res.json(err)
    res.json(resultData)})
})
*/

router.get('/', (req, res) => {
  PostModel.find()
  .then((resultData)=>{res.json(resultData)})
  .catch((err)=>{res.json(err)})
})

// Filter the results in find()
/*
router.get('/find', (req, res) => {
  PostModel.find({isActive:false, title:"My New Title 6"})
  .then((resultData)=>{res.json(resultData)})
  .catch((err)=>{res.json(err)})
})
*/
router.get('/find', (req, res) => {
  PostModel.find({isActive:false, title:"My New Title 10"}, 'title subTitle')
  .then((resultData)=>{res.json(resultData)})
  .catch((err)=>{res.json(err)})
})
// FindOne()---> Get the first data that matches with the conditions
router.get('/findOne', (req, res) => {
  PostModel.findOne({isActive:false, title:"My New Title 10"}, 'title subTitle')
  .then((resultData)=>{res.json(resultData)})
  .catch((err)=>{res.json(err)})
})

// FindById()---> According to an ID, it will return that result
router.get('/findById', (req, res) => {
    PostModel.findById('60c00cc7765db72da44eba4b')
    .then((resultData)=>{res.json(resultData)})
    .catch((err)=>{res.json(err)})
  })
  
  // Get the data from user request
router.post('/add', function (req, res) {
    const myPostModel = new PostModel({
      title: req.body.title,
      subTitle: req.body.subTitle,
      //createdDate: Date.now(),
      isActive: req.body.isActive,
      meta:req.body.meta,
      comments: req.body.comments
  
    })
    myPostModel.save((error, data)=>{
      if(error) res.json(error)
      res.json(data)
    })
  })
module.exports = router