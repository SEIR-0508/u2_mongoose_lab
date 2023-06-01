const { model } = require('mongoose')
const FlightsSchema = require('./Flights')
const AirportsSchema = require('./Airport')

const Airport = model('Airport', AirportsSchema)
const Flight = model('Flight', FlightsSchema)

module.exports = {
 Airport,
 Flight
}