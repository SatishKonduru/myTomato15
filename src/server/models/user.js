const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({
  username: String,
  password: String
}, {
  versionKey: false // removes __v property
})
module.exports = mongoose.model('user', userSchema,'user')
