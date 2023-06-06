const { Schema } = require('mongoose')

const Flight = new Schema(
  {
    airline: { type: String, required: true },
    flight_number: { type: Number },
    price: { type: String },
    number_of_seats: Number,
    departing_airport: { type: Schema.Types.ObjectId, ref: 'Airport' },
    arriving_airport: { type: Schema.Types.ObjectId, ref: 'Airport' },
    departure_date_and_time: { type: String, required: true },
  },
  { timestamps: true }
)

module.exports = Flight