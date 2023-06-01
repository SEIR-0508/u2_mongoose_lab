const { Schema } = require('mongoose')

const Flight = new Schema(
    {
        airline: { type: String, required: true },
        //seems that type: Number is used for both integers and floats
        flight_number: { type: Number, required: true },
        price: { type: Number, required: true },
        numberOfSeats: { type: Number, required: true },
        departingAirport: { type: Schema.Types.ObjectId, ref: 'Airport' },
        arrivalAirport: { type: Schema.Types.ObjectId, ref: 'Airport' },
        //https://www.mongodb.com/docs/manual/reference/method/Date/ --- will use this to figure out how to set the correct date
        departure_dateTime: { type: Date, required: true }
    },
    { timestamps: true}
)

module.exports = Flight;