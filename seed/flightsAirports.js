const db = require('../db')
const Chance = require('chance')
const { Airport, Flight } = require ('../models')

const chance = new Chance()

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const createAirports = async() =>
{

const airports = [...Array(8)].map((airport) =>
{
    return new Airport({
        name: chance.company(),
        location: chance.city(),
        code: chance.floating()

    })
})

await Airport.insertMany(airports)
console.log('created airports')
return airports


}






const createFlightsWithAirports = async (airports)=>
{

console.log(airports)

    const flights = [...Array(10)].map((flight) =>
{


    const selectedAirports = airports.splice(0, 10)
    return{
            airline: chance.company(),
            flightNumber: chance.integer(),
            price: chance.floating(),
            numberOfSeats: chance.integer(),
            departingAirport: selectedAirports.map((airport) => airport._id),
            arrivalAirport: selectedAirports.map((airport) => airport._id),
            departure: chance.date()
        }
})
await Flight.insertMany(flights)
console.log('created flights')
}

const run = async () =>
{
    const airports = await createAirports()
    await createFlightsWithAirports(airports)
    db.close()
}

run()