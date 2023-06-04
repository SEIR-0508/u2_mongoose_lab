const db = require('../db')
const { Airport } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const newAirports = async () => {
    const airports = [
    {
        name: 'Portland International Airport',
        location: "Portland, OR",
        code: 'PDX',
    },
    {
        name: 'Philadelphia International Airport',
        location: "Philadelphia, PA",
        code: 'PHL',
    },
    {
        name: 'Seattle-Tacoma International Airport',
        location: "Seattle, WA",
        code: 'SEA',
    },
    {
        name: 'Los Angeles International Airport',
        location: "Los Angeles, CA",
        code: 'LAX',
    },
    ]
    
    await Airport.insertMany(airports)
    console.log('Created Airports!')
}

const run = async () => {
    await newAirports(),
    db.close()
}

run()