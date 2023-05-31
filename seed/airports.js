const db = require('../db')
const Chance = require('chance')
const { Airport, Flight } = require('../models')
//may have to edit if there's errors about duplicate varaibles even though theyre on different files
const chance = new Chance()

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const createAirports = async () => {
    const airports = Array.from({ length: 6 }, () => {
        return new Airport({
            name: chance.name(),
            location: chance.city(),
            code: chance.string({length: 3, alpha:true, casing:'upper'})
        })
    })
    await Airport.insertMany(airports)
    console.log('airports created')
    return airports
}

const run = async () => {
    await createAirports(Airport)
    db.close()
}

run()