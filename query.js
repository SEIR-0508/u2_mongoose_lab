const db = require('./db')
const { Airport, Flight } = require(`./models`)


// As A User (AAU), I want to view a list of all flights and airports (index functionality)
// that displays each flight's airline, airport, flight no., and departure date/time (consider formatting the departs property).
async function findAllAirports() {
    const airports = await Airport.find()
    console.log(`All airports: `)
    for (let i = 0; i < airports.length; i++) {
        console.log(`Name: ${airports[i].name}`)
        console.log(`Location: ${airports[i].location}`)
        console.log(`Code: ${airports[i].code}`)
        console.log(` `)
    }
  }
  
async function findAllFlights() {
  const flights = await Flight.find()
  console.log('All flights:');
  for (let i = 0; i < flights.length; i++) {
    const departureId = flights[i].departingAirport
    const departureAirport = await Airport.findOne({ _id: departureId})
    const arrivalId = flights[i].arrivalAirport
    const arrivalAirport = await Airport.findOne({ _id: arrivalId})

    console.log(`Airline: ${flights[i].airline}`)
    console.log(`Flight Number: ${flights[i].flightNumber}`)
    console.log(`Price: ${flights[i].price}`)
    console.log(`Number of seats: ${flights[i].numberOfSeats}`)
    console.log(`Departure airport: ${departureAirport.name}`)
    console.log(`Arrival airport: ${arrivalAirport.name}`)
    console.log(`Departure date: ${flights[i].departure_dateAndTime}`)
    console.log(' ')
  }
}

// AAU, I want to be able to access the details for each of these objects via a Show route based on the object's ID
async function findOneFlightOrAirport() {
    const findOneAirport = await Airport.findOne({_id: `YOUR AIRPORT ID HERE`})
    console.log(findOneAirport)
    const findOneFlight = await Flight.findOne({_id: `YOUR FLIGHT ID HERE`})
    console.log(findOneFlight)
}

// AAU, I want to create flights by entering the information for Airports and Flights using a Query.js file that you will create
async function createFlight() {
    let flight = await Flight.create({
        airline: `AIRLINENAME`,
        flightNumber: `NUMBER`,
        price: `PRICE`,
        numberOfSeats: `NUMBEROFSEATS`,
        departingAirport: `AIRPORTID`,
        arrivalAirport: `AIRPORTID`,
        departure_dateAndTime: `DATEANDTIME`
    })
    console.log(flight)
}

// AAU, I want to be able to update the details for my Flights and Airports
async function updateFlight() {
    // const updated = await Airport.updateOne({name: `AIRPORTNAME`}, { KEY: `YOURCHANGEHERE`})
    const updated = await Flight.updateOne({flightNumber: `YOURFLIGHTNUMBER`}, { KEY: `YOURCHANGEHERE`})
    console.log(updated)
}

// AAU, I want to be able to delete any Flight and Airport
async function deleteFlight() {
    let deleted = await Flight.deleteOne({flightNumber: `FLIGHTNUMBERTODELETE`})
    console.log(deleted)
}





  const run = async () => {
    try {
        // await findAllAirports()
        // await findAllFlights()

        // await findOneFlightOrAirport()

        // await createFlight()

        // await updateFlight()

        // await deleteFlight()
    } catch (error) {
      console.log(error)
    } finally {
      await db.close()
    }
  }
  
  run()