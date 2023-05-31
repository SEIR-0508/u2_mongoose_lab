
const { Schema } = require('mongoose')

const Flight = new Schema (
    {
        airline: { type: String, required: true},
        // flight_number: { type: Number, required: true},
        // price: { type: Number, required: true},
        // numberOfSeats: { type: Number, required: true},
        // departure: { type: Date, required: true},
        // departingAirport: { type: Schema.Types.ObjectId, ref: 'Airport'},
        // arrivingAirport: { type: Schema.Types.ObjectId, ref: 'Airport'}
    },
    {timestamps:true}
)

module.exports = Flight