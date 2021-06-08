const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
    title: String,
    createdDate: Date
})

module.exports = mongoose.model('post', PostSchema)