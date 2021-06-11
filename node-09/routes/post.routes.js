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

  // Get the data from user request 2
router.post('/addAll', function (req, res) {
    const myPostModel = new PostModel( r)
    myPostModel.save((error, data)=>{
      if(error) res.json(error)
      res.json(data)
    })
  })

// Update()
router.put('/updateMany',(req, res)=>{
    PostModel.updateMany({isActive:false},{title:'Title has been updated....'})
    .then((data)=>{res.json(data)})
    .catch((error)=>{res.json(error)})
  })

//UpdateOne()
router.put('/updateOne',(req, res)=>{
  PostModel.updateOne({isActive:false},{title:'Title has been updated with UPDATEONE()....'})
  .then((data)=>{res.json(data)})
  .catch((error)=>{res.json(error)})
})

// FindByIdAndUpdate()
router.put('/findByIdAndUpdate', (req, res)=>{
  PostModel.findByIdAndUpdate('60c02cd48620cd314ccadef6',{title:'Ttitle has been updated with findByIdAndUpdate', isActive: true})
  .then((data)=>{res.json(data)})
  .catch((error)=>{res.json(error)})
})

// Delete()
router.delete('/deleteMany',(req,res)=>{
  PostModel.deleteMany({isActive:false})
  .then((data)=>{res.json(data)})
  .catch((error)=>{res.json(error)}) 
})

// DeleteOne()
router.delete('/deleteOne',(req,res)=>{
  PostModel.deleteOne({title:"My New Ttitle"})
  .then((data)=>{res.json(data)})
  .catch((error)=>{res.json(error)}) 
})

//FindByIdAndDelete
router.delete('/findByIdAndDelete',(req,res)=>{
  PostModel.findByIdAndDelete('60bee03579edd834a0324914')
  .then((data)=>{res.json(data)})
  .catch((error)=>{res.json(error)}) 
})
module.exports = router