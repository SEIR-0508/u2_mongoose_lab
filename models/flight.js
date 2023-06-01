const { Schema } = require('mongoose')

const Flight = new Schema(
    {
        airline: {type: String, required: true},
        flight_number: {type: Number, required: true},
        price: {type: Number, required: true},
        numberOfSeats: {type: Number, required: true},
        departingAirport: {type: Schema.Types.ObjectId, ref: 'Airport_id'},
        arrivalAirport: {type: Schema.Types.ObjectId, ref: 'Airport_id'},
        departure_dateAndTime: {type: Date}
    },
    {timestamp: true}
)

module.exports = Flight