const db = require('./db')
const { Airport, Flight } = require('./models')

const findAirports = async () => {
    const airports = await Airport.find()
    console.log(airports)
}
const findFlights = async () => {
    const flights = await Flight.find()
    console.log(flights)
}

// First User Story
const findAllFlights = async () => {
    const flights = await Flight.find({}, {airline: 1, flightNumber: 1, departureDateTime: 1, departingAirport: 1})
    .populate('departingAirport', 'name')
    .exec()

    const formattedFlights = flights.map((flight) => ({
        airline: flight.airline,
        flightNumber: flight.flightNumber,
        departureDateTime: flight.departureDateTime,
        departingAirport: flight.departingAirport.name
    }))
    console.log('All Flights:', formattedFlights)
}

// Second User Story: show details based on object's ID
    // Pass 'ID' as arguement
    // async function main() {
    //     try{
    //         await showObjectByID('651c81022c1abc780e2a4d5e')
const showObjectByID = async (myFlightID) => {
    const myFlight = await Flight.find({_id: myFlightID})
    .populate('departingAirport')
    .populate('arrivalAirport')
    .exec()

    const formattedFlightInfo = myFlight.map((info) => ({
        airline: info.airline,
        flightNumber: info.flightNumber,
        price: info.price,
        numberOfSeats: info.numberOfSeats,
        departingAirport: info.departingAirport.name,
        departingCode: info.departingAirport.code,
        arrivalAirport: info.arrivalAirport.name,
        arrivalCode: info.arrivalAirport.code
    }))
    console.log('My Flight Info:', formattedFlightInfo)
}

// Third User Story: AAU, I want to create flights by entering the information for Airports and Flights using a Query.js file that you will create

const createNewFlights = async () => {
    const nyc = await Airport.find({name:'New York JFK'})
    const atl = await Airport.find({name: 'Atlanta Hartsfield-Jackson'})
    const bsl = await Airport.find({name: 'United BSL'})
    const ord = await Airport.find({name: "Chicago O'Hare"})
    const lax = await Airport.find({name: 'Los Angeles International Airport'})

    const flight = await Flight.create(
        {
            airline: 'Frontier',
            flightNumber: 6843,
            price: 200,
            numberOfSeats: 130,
            departingAirport: nyc[0]._id,
            arrivalAirport: lax[0]._id,
            departureDateTime: new Date("2023-10-01T09:30:00Z")
        }
    )
    console.log(flight)
}

const createNewAirports = async () => {

    const airport = await Airport.create(
        {
            name: 'Los Angeles International Airport',
            location: 'Los Angeles, CA',
            code: 'LAX'
        }
    )
    console.log(airport)
}

// Fourth User Story: AAU, I want to be able to update the details for my Flights and Airports
const updateFlights = async () => {
    const flight = await Flight.updateOne(
        {flightNumber: 3345},
        {numberOfSeats: 110}
    )
    console.log(flight)
}
const updateAirports = async () => {
    const airportUpdate = await Airport.updateOne(
        {code: 'ATL'},
        {name: 'Hartsfield-Jackson'}
    )
    console.log(airportUpdate)
}

// Fifth User Story: AAU, I want to be able to delete any Flight and Airport
const deleteFlight = async (airFlightNumber) => {
    const toDelete = await Flight.deleteOne({flightNumber: airFlightNumber})
    console.log(toDelete)
}
const deleteAirport = async (airportID) => {
    const flightsFromDelete = await Flight.deleteMany({departingAirport: airportID})
    const flightToDelete = await Flight.deleteMany({arrivalAirport: airportID})
    const toDelete = await Airport.deleteOne({_id: airportID})
}

const deleteAll = async () => {
    const deleted = await Airport.deleteMany({})
    console.log(deleted)
}

// BONUS
// 1. Date Ascending Order Flights
// Resource: https://www.bmc.com/blogs/mongodb-sorting/
const listFlightInOrder = async () => {
    const dateInOrder = await Flight.find().sort({departureDateTime:1})
    console.log(dateInOrder)
}

// 2. All Dates past current date
// Resource: https://stackoverflow.com/questions/29791171/query-mongodb-for-a-datetime-value-less-than-now
const allUpcomingDates = async () => {
    const upcomingDates = await Flight.find({departureDateTime: {$gt: new Date()}})
    console.log(upcomingDates)
}

// 3. From flights from Cali to NY by descending price
const showFlights = async () => {
    const pullAirportInfo = await Flight.find()
    .populate('departingAirport')
    .populate('arrivalAirport')
    .exec()

    // const flightInfo = pullAirportInfo.map((info) => ({
    //     info.departingAirport.code
    // }))
    // console.log(flightInfo)
}

async function main() {
    try{
        await showFlights()
        // await allUpcomingDates()
        // await listFlightInOrder()
        // await deleteAirport('651c7067f4edb8d83d13a5e9')      //BSL Airport
        // await deleteFlight(3345)      //Last Flight added
        // await updateAirports()
        // await findAllFlights()
        // await findFlights()
        // await findAirports()
        // await showObjectByID('651c81022c1abc780e2a4d5e')
        // await createNewFlights()
        // await createNewAirports()
    }catch(error){
        console.log(error)
    }finally{
        await db.close()
    }
}

main()