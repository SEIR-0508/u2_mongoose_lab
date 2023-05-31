const { model } = require('mongoose')
const airportSchema = require('./airport')
const flightSchema = require('./flight')


const Airport = model('Airport', airportSchema)
const Flight = model('Flight', flightSchema)

module.exports = 
{
    Airport,
    Flight
}