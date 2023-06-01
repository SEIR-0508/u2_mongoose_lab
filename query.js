const db = require('./db')
const { Airport, Flight } = require('./models')

////////////////////////////////////////////////////////

const findAllFlights = async () => {
    const flights = await Flight.find()
    console.log('All Flights:',flights)
}

const findAllAirports = async () => {
    const airports = await Airport.find()
    console.log('All Airports:',airports)
}

// 5.1 shows a list of all flights and airports
const findEverything = async () => {
    await findAllAirports()
    await findAllFlights()
}

// 5.2 shows routes based on objects ID (i'm not entirely sure what these question are asking to be honest)
const showRoute = async (ObjectID) => {
    let route = await Flight.findById(ObjectID)
    console.log(route);
}

// 5.3 create flights based on airport information 
const createFlight = async (company, number, cost, seats, dep, arr, dateTime) => {

    let depLoc = await Airport.find({code: dep})
    let arrLoc = await Airport.find({code: arr})
    let depID = depLoc[0]._id
    let arrID = arrLoc[0]._id
    console.log(depID)

    let newFlight = new Flight({

        airline: company,
        flight_number: number,
        price: cost,
        numberOfSeats: seats,
        departingAirport: depID,
        arrivalAirport: arrID,
        departure_dateTime: dateTime,

    })

    await Flight.insertMany([newFlight])
    console.log('Flight added')
}

// 5.4 update details for flights and airports
const updateFlight= async (flightNum, key, newValue) => {
     await Flight.updateOne({flight_number: flightNum},{$set: {[key]: newValue} })
}

const updateAirport = async (code, key, newValue) => {
    await Airport.updateOne({code: code},{$set: {[key]: newValue} })
}

// 5.5 delete any flight and airport
const deleteFlight = async (flightNum) => {
    await Flight.deleteOne({flight_number: flightNum})
    console.log('deleted flight')
}

const deleteAirport = async (airCode) => {
    await Airport.deleteOne({code: airCode})
    console.log('deleted airport')
}





///////////////////////////////
const clearDatabase = async () => {
    await Flight.deleteMany({})
    await Airport.deleteMany({})
    console.log('data cleared')
}

const run = async () => {
    try {
        // 5.1
        //await findEverything()

        // 5.2
        // await showRoute('6477fa00ef7a826c4a8bfcd5')

        // 5.3
        // await createFlight('Delta', 120, 500, 70, 'DCA', 'JFK', new Date())

        // 5.4
        // await updateFlight(101,'price', 400 )
        // await updateAirport('DCA', 'location', 'Arlington, Virginia, USA')

        // 5.5
        // await deleteFlight(102)
        // await deleteAirport('MSY')

        
        // await findAllFlights()
        // await findAllAirports()
        // await clearDatabase()
    } catch (error) {
        console.log(error)
    } finally { 
        await db.close()
    }
}


run()