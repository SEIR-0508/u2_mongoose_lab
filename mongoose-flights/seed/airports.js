const db = require('../db')
const { Airport } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB Connection Error'))

const main = async() => {
    const airports = [
        {
            name: 'Logan Airport',
            location: 'Boston',
            code: 'LGN'
        }, 
        {
            name: 'LaGuardia Airport',
            location: 'New York City',
            code: 'LGA'
        },
        {
            name: 'John F Kennedy International Airport',
            location: 'New York City',
            code: 'JFK'
        },
        {
            name: 'Los Angeles International Airport',
            location: 'Los Angeles',
            code: 'LAX'
        },
        {
            name: 'San Francisco Airport',
            location: 'San Francisco',
            code: 'SFO'
        },
        {
            name: 'Philadelphia International Airport',
            location: 'Philadelphia',
            code:'PHL'
        }
    ]
    await Airport.insertMany(airports)
    console.log('added a bunch of airports')
}

const run = async() => {
    await main()
    db.close()
}

run()