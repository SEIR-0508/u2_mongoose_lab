const mongoose = require('mongoose')
const { Schema } = require('mongoose')
const Airport = require('./airport')

const flightSchema =  new Schema(
    {
        airline: {type: String, required: true},
        flightNumber: {type: Number, required: true},
        price: {type: Number, required: true},
        numberOfSeats: {type: Number, required: true},
        departingAirport: {type: Schema.Types.ObjectId, ref: 'Airport'},
        arrivalAirport: {type: Schema.Types.ObjectId, ref: 'Airport'},
        departureDate_Time: {Date}
    },
    {timestamps: true}
)

const Flight = mongoose.model('Flight', flightSchema)
module.exports = Flight