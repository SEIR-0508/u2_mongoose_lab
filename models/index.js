const { model } = require('mongoose')
const AirportSchema = require('./airports')
const FlightSchema = require('./flights')

const Airports = model('Airports', AirportSchema)
const Flights = model('Flights', FlightSchema)

module.exports = {
  Airports,
  Flights
}