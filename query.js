const db = require('./db')
const { Airports, Flights } = require('./models')



const allFlights = async () => {
let flight = await Flights.find({})
console.log(flight)
}



const allAirports = async () => {
let airport = await Airports.find({})
console.log(airport)
 }
    

const flightId = async () => {
    let flightId = await Flights.find({ _id: "64792ba40942641e39b8d741"})
    console.log(flightId)

}

const createFlight = async () => {
    let flight = await Flights.create({
    airline: 'United Airlines',
    flight_number: 77,
    price: 750.00,
    number_of_seats: 2,
    departing_airport: "64792ba40942641e39b8d738",
    arrival_airpot: [],
    departure_date_time: '6/1/2023 - 10:30'
    })
    console.log(flight)
}



async function main() {
   // await createFlight()
    // await flightId()
    await allFlights()
    // await allAirports()
    try {
    } catch (error) {
      console.log(error)
    } finally {
      await db.close()
    }
  }
  
  main()