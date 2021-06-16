const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BookSchema = new Schema();

module.exports = mongoose.model('book')