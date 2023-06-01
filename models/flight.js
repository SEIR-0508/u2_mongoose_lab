const { Schema } = require(`mongoose`)

const Flight = new Schema(
    {
        airline: {type: String, required: true},
        flight_number: {type: String, required: true},
        price: {type: Number, required: true},
        numberOfSeats: {type: Number, required: true},
        departingAirport: {type: String, required: true},
        arrivalAirport: {type: String, required: true},
        departure_date_time: {type: Date, required: true}
    },
    {timestamps: true}
)

module.exports = Flight