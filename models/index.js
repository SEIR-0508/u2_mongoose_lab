const { model } = require('mongoose')
const AirportSchema = require('./Airport')
const FlightSchema = require('./Flight')

const Airport = model('Airport', AirportSchema)
const Flight = model('Flight', FlightSchema)

module.exports = {
    Airport,
    Flight
}   