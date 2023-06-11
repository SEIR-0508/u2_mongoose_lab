const db = require('./db')
const { Airport, Flight } = require('./models')



// As A User (AAU), I want to view a list of all flights and airports (index functionality) that displays each flight's airline, airport, flight no., and departure date/time (consider formatting the departs property).

const findAllAirports = async () => {
  const airports = await Airport.find()
  console.log('All airports:', airports)
}

const findAllFlights = async () => {
  const flights = await Flight.find().populate('arrivingAirport').populate('departingAirport')
  console.log('All flights:', flights)
}

// AAU, I want to be able to access the details for each of these objects via a Show route based on the object's ID

const findFlightsById = async () => {
  const flight = await Flight.findById("64793901a441bd0eea4d8d34")
  
  console.log("flight found by ID", flight)
}

// AAU, I want to create flights by entering the information for Airports and Flights using a Query.js file that you will create


const MIA = Airport.find({ name: 'Miami International Airport'})
const JFK = Airport.find({ name: 'John F. Kennedy International Airport'})


const JetBlueFlight = {
    airline: 'JetBlue',
    flight_number: 393,
    price: '$802',
    numberOfSeats: 220,
    departingAirport: JFK,
    arrivalAirport: MIA,
    departure_dateAndTime: '10:29 PM.  Wed, May 31'
}

const createFlight = async (flightDetails) => {
  try {
    const newFlight = await Flight.create(flightDetails)
  console.log("New flight created:", newFlight)
  } catch (error) {
    console.log(error)
  }
}

// AAU, I want to be able to update the details for my Flights and Airports

const updateFlight = async () => {
  try {
  const updatedFlight = await Flight.updateOne()
  } catch (error) {
    console.log(error)
  }
}

// AAU, I want to be able to delete any Flight and Airport

const deleteFlight = async () => {
  try {
  const deletedFlight = Flight.deleteOne()
  }catch (error) {
    console.log(error)
  }
}





const run = async () => {
  try {
    await findAllAirports()
    await findAllFlights()
    // await findFlightsById()
    // await createFlight(JetBlueFlight)
    // await updateFlight()
    // await deleteFlight()
  } catch (error) {
    console.log(error)
  } finally {
    await db.close()
  }
}

run()