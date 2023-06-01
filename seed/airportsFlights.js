const db = require('../db')
const Chance = require('chance')
const { Flight, Airport } = require('../models')

const chance = new Chance()

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const createFlights = async () => {
    const flights = [...Array(8)].map((flight) => {
        return new Flight({
            airline: `${chance.animal()} Airlines`,
            flightNumber: chance.integer({ min: 100, max: 999 }),
            price: chance.floating({ min: 300, max: 1000, fixed:2 }),
            numberOfSeats: chance.integer({ min: 0, max: 210 }),
            departingAirport:`${chance.city()} Airport`,
            arrivalAirport: `${chance.city()} Airport`,
            departureDateTime: chance.date({year: 2023}),
        })
    })
    await Flight.insertMany(flights)
    console.log('Created Flights!')
    return flights
}

const createAirportsWithFlights = async (flights) => {
    let lenOfItems = 2
    console.log(flights)
    const airports = [...Array(4)].map((airport) => {
        const selectedFlights = flights.splice(0, flights.length / lenOfItems)
        return {
            name: `${chance.city()} Airport`,
            location: chance.country(),
            code: chance.string({ length: 3 }),
            flights: selectedFlights.map((flight) => flight)
        }
    })
    await Airport.insertMany(airports)
    console.log('Created Airports!')
}

const run = async () => {
    const flights = await createFlights()
    await createAirportsWithFlights(flights)
    db.close()
}

run()