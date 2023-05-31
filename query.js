const db = require('./db')
const { Airport, Flight } = require('./models')

const findAllAirports = async () => {
    const airports = await Airport.find()
    console.log(airports)
}

const findAllFlights = async () => {
    const flights = await Flight.find()
    console.log(flights)
}

const run = async () => {
    try {
        await findAllAirports()
        await findAllFlights()
    } catch (error) {
        console.log(error)
    } finally {
        await db.close()
    }
}

run()



// USER STORIES:

// As A User (AAU), I want to view a list of all flights and airports (index functionality) that displays each flight's airline, airport, flight no., and departure date/time (consider formatting the departs property).




// AAU, I want to be able to access the details for each of these objects via a Show route based on the object's ID

// AAU, I want to create flights by entering the information for Airports and Flights using a Query.js file that you will create

// AAU, I want to be able to update the details for my Flights and Airports

// AAU, I want to be able to delete any Flight and Airport