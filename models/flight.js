const { Schema } = require(`mongoose`)

const Flight = new Schema(
    {
        airline: {type: String, required: true},
        flight_number: {type: String, required: true},
        price: {type: Number, required: true},
        numberOfSeats: {type: Number, required: true},
        departingAirport: {type: Schema.Types.ObjectId, ref: `Airport`},
        arrivalAirport: {type: Schema.Types.ObjectId, ref: `Airport`},
        departure_date_time: {type: Date, required: true}
    },
    {timestamps: true}
)

module.exports = Flight