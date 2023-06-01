// As A User (AAU), I want to view a list of all flights and airports (index functionality)
// that displays each flight's airline, airport, flight no., and departure date/time 
//(consider formatting the departs property).
// const db = require('./db') 
// const { Flight } = require('./models')
// let flightsInfo = async () => {
//     const flights = await Flight.find().populate('departingAirport').populate('arrivalAirport')
//     console.log(flights)
//     return flights
// } 
// console.log(flightsInfo())


// AAU, I want to be able to access the details for each of these objects via a Show 
//route based on the object's ID
// const db = require('./db') 
// const { Flight } = require('./models')
// let flightsInfo = async () => {
//     const flights = await Flight.findOne().populate('departingAirport').populate('arrivalAirport')
//     console.log(flights)
//     return flights
// } 
// console.log(flightsInfo())


// AAU, I want to create flights by entering the information for Airports and Flights 
//using a Query.js file that you will create
// const db = require('./db') 
// const { Flight } = require('./models')
// let flightsNew = async () => {
//     const Airport = await Airport.findOne()
 
// console.log(flightsNew()
// )}

// AAU, I want to be able to update the details for my Flights and Airports
// const db = require('./db') 
// const { Flight } = require('./models')
// const updateFlight = async () => { const updated = await 
// Flight.updateOne( { airline: 'United'}, { departureTime: '09:00' } ) console.log(updated) }

// AAU, I want to be able to delete any Flight and Airport
// const db = require('./db') 
// const { Flight } = require('./models')
// const deleteFlight = async () => 
// { let deleted = await Flight.deleteOne( { departingAirport: "6477db975d7e74675a9ce780" } ) 
// console.log(flights)}
// console.log(deleted())