const db = require('../db')
const { Airports } = require('../models')

db.on('error',console.error.bind(console, 'connection error'))

const main = async () => {
    const airports = [
        {
            name: 'Los Angeles International Airport',
            location: 'Los Angeles',
            code: 'LAX'
        },
        {
            name: 'Heathrow Airport',
            location: 'London',
            code: 'LHR'
        },
        {
            name: 'Paris Charlse de Gaulle airport',
            location: 'Paris',
            code: 'CDG'
        },
        {
            name: 'Haneda Airport',
            location: 'Tokyo',
            code: 'HND'
        },
        {
            name: 'Shanghai Pudong Airport',
            location: 'Shanghai',
            code: 'PVG'
        }
    ]

    await Airports.insertMany(airports)
    console.log('successgfully insert airports')
}

const run = async () => {
    await main()
    db.close()
}

run()