const { Schema } = require('mongoose')

// creating a new object called Flight:
const Flight = new Schema(
    {
        airline: { type: String, required: true },
        flight_number: { type: String, required: true },
        price: { type: String, required: true },
        numberOfSeats: { type: Number, required: true },
        departingAirport: { type: String, ref: 'Airport' },
        arrivalAirport: { type: String, ref: 'Airport' },
        departure_date_time: { type: String, required: true }
    },
    {timestamps: true}
)

module.exports = Flight