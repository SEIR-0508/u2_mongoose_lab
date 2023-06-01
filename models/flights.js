const { Schema } = require('mongoose')
//const { Flights } = require('.')

const Flights = new Schema(
{ 
    airline: {type: String, required: true},
    flight_number: {type: Number, required: true},
    price: {type: Number, required: true},
    number_of_seats: {type: Number, required: true},
    departing_airport: [{type: Schema.Types.ObjectId, ref: 'Airport_id' }],
    arrival_airpot: [{type: Schema.Types.ObjectId, ref: 'Airport_id'}],
    departure_date_time: {type: String, required: true}
},

)

module.exports = Flights