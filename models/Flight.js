const { Schema } = require('mongoose');

const Flight = new Schema(
  {
    airline: { type: String, required: true },
    flightNumber: { type: Number, required: true }, // Change 'Integer' to 'Number'
    price: { type: Number, required: true }, // Change 'float' to 'Number'
    numberOfSeats: { type: Number, required: true }, // Change 'Integer' to 'Number'
    departingAirport: { type: Schema.Types.ObjectId, ref: 'Airport' }, // Change 'airport_id' to 'Airport'
    arrivalAirport: { type: Schema.Types.ObjectId, ref: 'Airport' }, // Change 'airport_id' to 'Airport'
    departureDateTime: { type: Date, required: true }
  },
  { timestamps: true }
);

module.exports = Flight;
