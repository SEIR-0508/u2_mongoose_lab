const db = require('./db') 
const { Flight, Airport } = require('./models')

const { Flight } = require("./models")

const findInfo = async () => { 
    const flights = await Flight.find().populate('departingAirport').populate('arrivalAirport')
    console.log(flights)
    return flights
 }
console.log(findInfo())

const findObject = async () => {
    const object = await Flight.findOne({code: ''})
    return findObject
}

const createFlights = async () => { const flights = await Flight.findOne()

let flight = await Flight.create({
        airline: 
        flight_number: 
        price: 
        numberOfSeats: 
        departingAirport: 
        arrivalAirport: 
        departure_date_time: 
})
console.log(flight)
}

const updateFlight = async () => { const updated = await Flight.updateOne( { flight_number: '' }, {} )console.log(updateFlight) }

const deleteFlight = async () => { let deleted = await Flight.deleteOne({ flight_number: '' 'Brothers Karamazov' }) console.log(deleted) }

const deleteAirport = async () => { let deleted = await Airport.deleteOne({ name: '' }) console.log(deleted) }

async function main() { try { await findInfo() await findObject() await createFlights() updateFlight() deleteFlight() deleteAirport()}

main()