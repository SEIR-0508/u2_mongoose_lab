const db = require ('../db')
const { Airport } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const createAirport = async () => {
    const airports = [
        {
            name: 'Dulles International',
            location: 'Dulles, Virginia',
            code: 'IAD'
        },
        {
            name: 'Denver International',
            location: 'Denver, Colorado',
            code: 'DEN'
        },
        {
            name: 'Orlando International',
            location: 'Orlando, Florida',
            code: 'MCO'
        },
        {
            name: 'Reagan National',
            location: 'Washington, D.C',
            code: 'DCA'
        }
    ]
    await Airport.insertMany(airports)
    console.log('Created Airports!')
}

const run = async() => {
    await createAirport()
    db.close()
}

run()