const db = require('../db')
const { Airport } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    
    const airports = [
        {
            name: "John F. Kennedy International Airport",
            location: "New York",
            code: "JFK"
        },
        {
            name: "LaGuardia Airport",
            location: "New York",
            code: "LGA"
        },
        {
            name: "Los Angeles International Airport",
            location: "California",
            code: "LAX"
        },
        {
            name: "San Francisco International Airport",
            location: "California",
            code: "SFO"
        }
    ]

    await Airport.insertMany(airports)
    console.log('created airports')
}

const run = async () => {
    await main()
    db.close()
}

run()