const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BarberSchema = new Schema({
    name: String,
    bio: String,
}, {timestamps: true})


module.exports = mongoose.model("Barbers", BarberSchema)