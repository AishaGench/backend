const express = require('express')
const router = express.Router()

const AuthorModel = require('../models/Author')

// Snippet -> node-express-get
router.get('/', (req, res) => {
  res.send('GET request to the AUTHOR PAGE')
})

// POST, snippet->  node-express-post
router.post('/', function (req, res) {
  const newAuthor = new AuthorModel(req.body)
  newAuthor.save()
  .then(result=>res.json(result))
  .catch(err => res.json(err))
})


router.get('/aggregate',(req, res)=>{
    AuthorModel.aggregate([
      /*{
        $match: {isDelete: false}
      },
      {
        $group: {_id:"$category", totalCount:{$sum:1}}
      },*/
      {
        $project:{name:true, score:true}
      }
    ])
    .then(data=>res.json(data))
    .catch(error=>res.json(error))
  })
  
  module.exports = router