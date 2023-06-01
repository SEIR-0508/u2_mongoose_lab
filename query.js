const db = require('./db')
const { Airport, Flight } = require('./models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

//#1
const findAllFlights = async () => {
    const flights = await Flight.find()
    //flights.departingAiport = flights.departingAiport.name
    console.log(flights)
}


//#2
const showRoute = async (id) => {
    const flight = await Flight.find({_id: id})
    const depart = await Airport.find({_id: flight[0].departingAirport},{name: 1})
    const arrive = await Airport.find({_id: flight[0].arrivalAirport},{name: 1})
    console.log(`${depart[0].name} to ${arrive[0].name}`)
}


//#3
const createFlight = async () => {
    
}


const run = async () => {
    try {
       //await findAllFlights()
       await showRoute('6477fcae3678f327111d4b9e')
    } catch (error) {
      console.log(error)
    } finally {
      await db.close()
    }
  }
  
  run()