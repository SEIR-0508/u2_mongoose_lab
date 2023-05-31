const db = require('../db')
// when I had this as { Airport, Flight } the departing & arriving airport codes reverted to the chance.radio codes
// but flipping them back to { Flight, Airport } fixed it so that the dep/arr airports are the four codes of the actual airports I chose...
const { Flight, Airport } = require('../models')
const Chance = require('chance')

const chance = new Chance()

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const airports = await Airport.find({})

    const flights = [...Array(7)].map((flight) => {
        return new Flight ({
            airline: chance.company(),
            flight_number: chance.zip(),
            price: chance.dollar(),
            numberOfSeats: chance.integer({min: 6, max: 100}),
            departingAirport: airports[chance.pickone([0,1,2,3])].code,
            arrivalAirport: airports[chance.pickone([0,1,2,3])].code,
            departure_date_time: chance.date()
        })
    })
    await Flight.insertMany(flights)
    console.log('created flights')
    return flights
}

const run = async () => {
    await main()
    db.close()
}

run()