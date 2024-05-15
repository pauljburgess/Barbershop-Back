const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookingSchema = new Schema({
  
  name: { type: String, required: true },

  Phone: { type: String, required: true },

  barber: [{
    type: Schema.Types.ObjectId,
    ref: 'Barber',
    required: true
  }],

  appointment: [{
    type: Schema.Types.ObjectId,
    ref: 'Appointment',
    required: true
  }],

  service: [{
    type: Schema.Types.ObjectId,
    ref: 'Service',
    required: true
  }],

}, { timestamps: true })

module.exports = mongoose.model("Booking", bookingSchema)