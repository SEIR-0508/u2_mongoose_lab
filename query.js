const db = require('./db')
const { Airports, Flights } = require('./models')

const showFlights = async () => {
    // story 1
    //const airports = await Airports.find()
    const flights = await Flights.find({},{_id:0, airline:1, departureAirport:1, arrivalAirport:1, flightNumber:1 ,departureDate:1})
    //console.log(airports)
    console.log(flights)
}

const createFlights = async () => {
    const LAX = await Airports.find({code:'LAX'})
    const LHR = await Airports.find({code:'LHR'})
    const CDG = await Airports.find({code:'CDG'})
    const HND = await Airports.find({code:'HND'})
    const PVG = await Airports.find({code:'PVG'})
    await Flights.insertMany(
        [{
            airline: 'United Airlines',
            flightNumber: '7323',
            price: '634',
            numberOfSeats: '263',
            departingAirPort: PVG[0]._id,
            arrivalAirport: LAX[0]._id,
            departureDate: new Date('2023-04-22T15:45:15Z')
        }]
    )
}

const updateFlights = async () => {
    await Flights.updateOne({airline: 'United Airlines'},{$set:{airline: 'Delta Air Lines'}})
}

const deleteFlights = async () => {
    await Flights.deleteOne({airline:'United Airlines'})
}

//showFlights()
//createFlights()
//updateFlights()
//deleteFlights()