const mongoose = require('mongoose')
const airportSchema = require('./airport')
const flightSchema = require('./flight.js')

const Airports = mongoose.model('Airport',airportSchema)
const Flights = mongoose.model('Flight',flightSchema)

module.exports = {
    Airports,
    Flights
}