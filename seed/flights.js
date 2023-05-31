//oh my god I got stuck seeding this because flights vs Flights. the lowercase f uppercase FUCKED me
const db = require('../db')
const Chance = require('chance')
const { Airport, Flight } = require('../models')
//may have to edit if there's errors about duplicate varaibles even though theyre on different files
const chance = Chance()
//sidenote, chance has a section on dice which will be useful for games
db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const createFlights = async() => {
    const flights = Array.from({length:15}, async () => {
        return new Flight({
            airline: chance.sentence({words: 2}),
            flight_number: chance.integer({min:111, max:999}),
            //hmm I wonder if 0 are placeholders? if min was 000 would flight number be '000' or '0'
            price: chance.floating({min: 75, max:5000}),
            //can math functions be used to round to a dollar-looking int
            numberOfSeats: chance.integer({min:80, max:250}),
            departure: chance.date(),
            departingAirport: Airport._id,
            arrivingAirport: Airport._id
        })
    })
    await Flight.insertMany(flights)
    console.log('flights createed')
    return airports
    //let airports = await Airport.find({})
}

const run = async () => {
    const flights = await createFlights
    await createFlights(flights)
    db.close()
}

run()