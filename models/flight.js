const { Schema } = require('mongoose')

const Flight = new Schema(
    {
        airline: {type: String, required: true},
        flightNumber: {type: Number, required: true},
        price: {type: Number, required: true},
        numberOfSeats: {type: Number, required: true},
        departingAirport: {type: Schema.Types.ObjectId, ref: "airport_id", required: true},
        arrivalAirport: {type: Schema.Types.ObjectId, ref: "airport_id", required: true},
        departureDateTime: {type: Date, required: true}
    },
    {timestamps: true}
)

module.exports = Flight