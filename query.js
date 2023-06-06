const db = require('./db')
const { Airport, Flight } = require('./models')

const findAllAirports = async () => {
  const airports = await Airport.find()
  console.log('All airports:', airports)
}

const findAllFlights = async () => {
  const flights = await Flight.find().populate('arriving_airport').populate('departing_airport') //USE THIS IN THE FUTURE
  console.log('All flights:', flights)
}

const findFlightById = async ( )

const findAirportById = async ( ) // FIX THIS


const createFlight = async ( departingAirport , arrivingAirport ) => {
  const airport = await Airport.findOne()

  let flight = await Flight.create({
    airline: 'Delta',
    flight_number: 22,
    price: '$299.34',
    number_of_seats: 234,
    departing_airport: departingAirport,
    arriving_airport: arrivingAirport,
    departure_date_and_time: ''
  })
}

const run = async () => {
  try {
    await findAllAirports()
    await findAllFlights()
    await createFlight()
  } catch (error) {
    console.log(error)
  } finally {
    await db.close()
  }
}





run()