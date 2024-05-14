const mongoose = require('mongoose')
const Schema = mongoose.Schema

const appointmentSchema = new Schema({
  barber: [{
    type: Schema.Types.ObjectId,
    ref: 'Barber'
    }],
  date: Date,
  time: Number,
}, {timestamps: true})

module.exports = mongoose.model("Appointment", appointmentSchema)