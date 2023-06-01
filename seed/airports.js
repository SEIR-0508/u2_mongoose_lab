const db = require('../db')
const { Airport } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const airports = [
        {
            name: 'John F. Kennedy International Airport',
            location: 'New York, NY',
            code: 'JFK'
        },
        {
            name: 'Newark Liberty International Airport',
            location: 'Newark, NJ',
            code: 'EWR'
        },
        {
            name: 'LaGuardia Airport',
            location: 'New York, NY',
            code: 'LGA'
        },
        {
            name: 'Westchester County Airport',
            location: 'White Plains, NY',
            code: 'HPN'
        }
    ]
    await Airport.insertMany(airports)
    console.log('created airports')
    return airports
}

const run = async () => {
    await main()
    db.close()
}

run()