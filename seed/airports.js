const db = require('../db')
const { Airport } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const airports = [
        {
            name: 'San Francisco International Airport',
            location: 'San Francisco',
            code: 'SFO'
        },
        {
            name: 'John F. Kennedy International Airport ',
            location: 'New York City',
            code: 'JFK'
        },
        {
            name: 'Hartsfield-Jackson International Airport',
            location: 'Atlanta',
            code: 'ATL'
        },
        {
            name: 'St. Louis Lambert International Airport',
            location: 'St. Louis',
            code: 'STL'
        }
    ]

    await Airport.insertMany(airports)
    console.log('Created airports!')
}

const run = async () => {
    await main()
    db.close
}

run()