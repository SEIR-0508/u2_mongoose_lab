const { model } = require('mongoose')
const FlightSchema = require('./flight')
const AirportSchema = require('./airline')

const Flight = model('flight', FlightSchema)
const Airport = model('airline', AirportSchema)

module.exports = {
    Flight,
    Airport
}