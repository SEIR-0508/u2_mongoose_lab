const db = require('./config/db')
const { Airport, Flight } = require('./models')

// Function that returns an airport name, when given an airport object id
async function getAirportName(airportId) {
    let airport = await Airport.findOne({_id: airportId})
    return airport.name
}

// Function that returns all airports and flights
async function viewAll() {
    let airports = await Airport.find()
    let flights = await Flight.find({},{airline: 1, departingAirport: 1, flightNumber: 1, departureDateTime: 1})
    
    let flights2 = flights.map( async (flight) => {
            return {
                airline: flight.airline,
                departingAirport: flight.departingAirport,
                flightNumber: flight.flightNumber,
                departureDateTime: flight.departureDateTime.toDateString()
            }
        })

    console.log(airports, flights2)
}

// Function that logs the departure and arrival airports, when given a flight object id.
async function showRoute(flightId) {
    let flight = await Flight.findOne({_id: flightId})
    let departingAirport = flight.departingAirport
    let arrivalAirport = flight.arrivalAirport
    let departingAirportName = await getAirportName(departingAirport)
    let arrivalAirportName = await getAirportName(arrivalAirport)
    console.log(`Departs from ${departingAirportName} and arrives in ${arrivalAirportName}.`)
}

// Function to add a flight
async function addFlight(airline, flightNumber, price, numberOfSeats, departingAirport, arrivalAirport, departureDateTime) {
    await Flight.insertMany([
        {
            airline,
            flightNumber,
            price,
            numberOfSeats,
            departingAirport,
            arrivalAirport,
            departureDateTime
        }
    ])
    console.log('Added a flight!')
}

// Function to update airport name
async function updateAirport(airportId, updatedName) {
    await Airport.updateOne({_id: airportId, $set: {name: updatedName}})
    console.log('Updated airport name!')
}

// Function to update flight price
async function updateFlight(flightId, updatedPrice) {
    await Flight.updateOne({_id: flightId}, {$set: {price: updatedPrice}})
    console.log('Updated flight price!')
}

// Function to delete a flight
async function deleteFlight(flightId) {
    await Flight.deleteOne({_id: flightId})
    console.log('Deleted a flight!')
}

// Function to log flights, sorted by departure time
async function showFlightsByDepartureTime() {
    let flights = await Flight.aggregate([ {$sort: {departureDateTime: 1}} ])
    // let flights = await Flight.aggregate([ {$match: {departureDateTime: {$gte: new Date()}}}, {$sort: {departureDateTime: 1}} ])
    console.log(flights)
}

// Function to get airport Id, when given airport code
async function getAirportId(code) {
    let airport = await Airport.findOne({code: code})
    return airport._id
}

// Function to show all flights from california to new york, sorted by descending price
async function showFlightsFromCaliforniaToNewYork() {
    let sfoId = await getAirportId('SFO')
    let jfkId = await getAirportId('JFK')

    let flights = await Flight.aggregate([
        {$match: {$and: [
            {departingAirport: sfoId},
            {arrivalAirport: jfkId}
        ]}},
        {$sort: {price: -1}}
    ])

    console.log(flights)
}

async function run() {
    try {
        // await viewAll()
        // await showRoute('64779227627422a93c8f0621')
        // await addFlight('United', 144, 300, 30, "64779227627422a93c8f0615", "64779227627422a93c8f0618", new Date())
        // await updateAirport("64779227627422a93c8f0615", "Boston Logan International Airport")
        // await updateFlight("64779227627422a93c8f061c", 750)
        // await deleteFlight("6477a0f0235760947ff66217")
        // await showFlightsByDepartureTime()
        // await addFlight('Jetblue', 1299, 1100, 0, "64779227627422a93c8f0618", "64779227627422a93c8f0616", new Date())
        // await showFlightsFromCaliforniaToNewYork()
    } catch (e) {
        console.log('Error', e.message)
    } finally {
        await db.close()
    }
}

run()