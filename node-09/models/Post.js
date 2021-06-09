const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
    title: String,
    createdDate: Date,
    isActive: Boolean,
    comments:[{message:String}],
    meta:{vaotes:Number,favs:Number}
})

module.exports = mongoose.model('post', PostSchema)