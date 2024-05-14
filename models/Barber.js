const mongoose = require('mongoose')
const Schema = mongoose.Schema

const barberSchema = new Schema({
  name: String,
  bio: String,
}, {timestamps: true})

module.exports = mongoose.model("Barber", barberSchema)