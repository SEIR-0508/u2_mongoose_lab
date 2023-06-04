const db = require('./db')
const { Airport, Flight } = require('./models')

// find all flights
const findAllFlights = async () => {
    const flights = await Flight.find()
    console.log('flights', flights)
}

// find all airports
const findAllAirports = async () => {
    const airports = await Airport.find()
    console.log('airports', airports)
}

// As A User (AAU), I want to view a list of all flights and airports (index functionality) that displays each flight's airline, airport, flight no., and departure date/time (consider formatting the departs property).
const findFlightsAndAirports = async () => {
    const flight = await Flight.find()
    const airport = await Airport.find()
    console.log(`Flight: ${flight}, Airport: ${airport}`)
}


// AAU, I want to be able to access the details for each of these objects via a Show route based on the object's ID

// AAU, I want to create flights by entering the information for Airports and Flights using a Query.js file that you will create

// AAU, I want to be able to update the details for my Flights and Airports

// AAU, I want to be able to delete any Flight and Airport

const run = async () => {
    try {
        await findAllAirports()
        await findAllFlights()
        await findFlightsAndAirports()
    } catch (error) {
        console.log(error)
    } finally {
        await db.close()
    }
}

run()