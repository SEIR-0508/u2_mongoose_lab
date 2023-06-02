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

const updateFlight = async () => {
    let updateAir = await Flights.updateOne({
        airline: 'United Airlines',
        flight_number: 8,
        price: 250,
        number_of_seats: 2,
        departing_airport: "64792ba40942641e39b8d736",
        arrival_airpot: [],
        departure_date_time: '6/1/2023 - 01:30'
    })
    console.log(updateAir)
}

const updateAirport = async () => {
    let updatePort = await Airports.updateOne({
      name:'Los Angeles International Airport',  
      location: '1 World Way, Los Angeles, CA 90045',
      code: 'LAX'
})
coonsole.log(updatePort)
}

const deleteFlight = async () => {
    let removeFlight = await Flights.deleteOne({flight_number: 9})
    console.log(removeFlight)
}

const deleteAirport = async () => {
    let removeAir = await Flights.deleteOne({})
    console.log(removeAir)
}






async function main() {
     await deleteAirport()
     //await deleteFlight()
    //await updateAirport
   // await updateFlight()
   // await createFlight()
    // await flightId()
    //await allFlights()
    // await allAirports()
    try {
    } catch (error) {
      console.log(error)
    } finally {
      await db.close()
    }
  }
  
  main()