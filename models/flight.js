const { Schema } = require('mongoose')

const Flight = new Schema(
    {
        airline: {type: String, required: true},
        flight_number: {type: Number, required: true},
        price: {type: Number, required: true},
        numberOfSeats: {type: Number, required: true},
        departingAirport: {type: Schema.Types.ObjectId, ref: 'depart'},
        arrivalAirport: {type: Schema.Types.ObjectId, ref: 'arrive'},
        departureDateTime: {type: Date, required: true}
    },
    {timestamps: true}
)

module.exports = Flight