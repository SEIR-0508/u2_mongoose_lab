const db = require('./db')
const { Airport, Flight } = require('./models')

const allFlights = async () => {
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

async function main() {
    try { findAll()
    } catch (error) {
      console.log(error)
    } finally {
      await db.close()
    }
  }
  
  main()

