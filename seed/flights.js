const db = require(`../db`)
const Chance = require(`chance`)
const { Airport, Flight } = require(`../models`)

const chance = new Chance()

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

async function main() {
    const airports = await Airport.find()

    const flights = []

    for (let i = 0; i < 7; i++) {
        let departingIndex = 0
        let arrivingIndex = 0
        do {
            departingIndex = chance.integer({min: 0, max: airports.length - 1})
            arrivingIndex = chance.integer({min: 0, max: airports.length - 1})
        } while (departingIndex === arrivingIndex)
        const flight =  {
            airline: chance.last() + ` Air`,
            flightNumber: chance.integer({ min: 1000000, max: 9999999}),
            price: `$`+ chance.integer({ min: 100, max: 1500}) + `.00`,
            numberOfSeats: chance.integer({ min: 50, max: 150}),
            departingAirport: airports[departingIndex]._id,
            arrivalAirport: airports[arrivingIndex]._id,
            departure_dateAndTime: chance.date({ year: 2024})
        }
        flights.push(flight)
    
}
    await Flight.insertMany(flights)
}

async function run() {
    await main()
    db.close()
}

run()