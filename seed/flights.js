const db = require('../db')
const Chance = require('chance')
const { Airport, Flight } = require('../models')
const chance = new Chance()
const airportIDs = [
    "6477cdd8f37e54cf841534bf",
    "6477cdd8f37e54cf841534c0",
    "6477cdd8f37e54cf841534c1",
    "6477cdd8f37e54cf841534c2",
    "6477cdd8f37e54cf841534c3",
    "6477cdd8f37e54cf841534c4"
]

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const createFlights = async() => {
    const flights = Array.from({length:15}, async () => {
        const randomDepart = chance.pickone(airportIDs)
        const randomArrive = chance.pickone(airportIDs)
        return new Flight({
            airline: chance.sentence({words: 2}),
            flight_number: chance.integer({min:111, max:999}),
            price: chance.integer({min: 75, max:5000}),
            numberOfSeats: chance.integer({min:80, max:250}),
            departure: chance.date(),
            // I found out that my successfully seeded airports cannot be accessed directly through mongoose, so I ran them through an array in MongoDB that would find just the IDs. 
            departingAirport: randomDepart,
            arrivingAirport: randomArrive
        })
    })
    await Flight.insertMany(flights)
    console.log('flights created')
}

const run = async () => {
    const flights = await createFlights()
    await createFlights(flights)
    db.close()
}

run()