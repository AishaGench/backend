const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BookSchema = new Schema({
  authorId:{type:Schema.ObjectId, required:true},
  title: {type:String, required:true},
  isbn:{type:String, required:true},
  subTitle:{type:String, required:true},
  coAuthor:{type:String, required:true},
  published:{type:Date, required:true },
  publisher:{type:String, required:true},
  pages:{type:Number, required:true},
  description:{type:String, required:true},
  website:{type:String, required:true},
})

module.exports = mongoose.model('book', BookSchema)