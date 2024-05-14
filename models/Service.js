const mongoose = require('mongoose')
const Schema = mongoose.Schema

const serviceSchema = new Schema({
  name: String,
  price: Number
},{timestamps:true})

module.exports = mongoose.model('Service', serviceSchema)