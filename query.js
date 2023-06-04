const db = require('./db')
const { Airport, Flight } = require('./models')

const findFlights = async () => {
    const flights = await Flight.find()
    console.log(flights)
}
const findAirports = async () => {
    const airport = await Airport.find()
    console.log(airport)
}
const findAll = async () => {
    const flight = await Flight.find()
    const airport = await Airport.find()
    console.log(`${flight} and ${airport}` )
}

const updateAirport = async () => {
  let changedAirport = await Airport.updateOne(
      {name: 'LaGuardia International Airport'},
      {location: "Queens, NY"}, 
      {code: "LGA"}
  )
  console.log(changedAirport)
}

const updateFlight = async () => {
  const airport = await Airport.find()
  let changedFlight = await Flight.updateOne(
      {airline: `Delta Airlines`},
      {flightNumber: '6727'},
      {price: 90.20},
      {numberOfSeats: 5},
      {departingAirport: airport[3]._id},
      {arrivalAirport: airport[0]._id},
      {departureDateTime: 'March 8, 2023 9:23 PM'}
  )
  console.log(changedFlight)
}

const createFlight = async () => {
  const airport = await Airport.find()
  let newFlight = await Flight.create({
      airline: `Qatar Airlines`,
      flightNumber: '4727',
      price: 390.20,
      numberOfSeats: 45,
      departingAirport: airport[2]._id,
      arrivalAirport: airport[3]._id,
      departureDateTime: 'December 8, 2023 9:23 PM',
  })
  console.log(newFlight)
}

const deleteAirport = async () => {
  const removedAirport = await Airport.deleteOne({ code: 'LAX'})
  console.log(removedAirport)
}

const deleteFlight = async () => {
  const removedFlight = await Flight.deleteOne({ airline: 'Qatar Airlines'})
  console.log(removedFlight)
}
async function main() {
    try { 
          findAirports(),
          findAll(),
          findFlights(),
          updateAirport(),
          updateFlight(),
          createFlight(),
          deleteFlight(),
          deleteAirport()
    } catch (error) {
      console.log('error',  error.message)
    } 
  }
  
  main()

