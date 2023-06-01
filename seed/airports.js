const db = require('../db')
const { Airport } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () => {
   
    const Airports = [
        {
            name:'Tampa International Airport',
            location: 'Tampa, FL',
            code: 'TPA'
        },
        
        {
            name: 'John F. Kennedy Airport',
            location: 'New York, NY',
            code: 'JFK'
        },
        
        {
            name: 'Boston Logan International Airport',
            location: 'Boston, MA',
            code: 'BOS'
        },
        
        {
            name: 'Newark Liberty International Airport',
            location: 'Newark, NJ',
            code: 'EWR'
        }
    ]
    await Airport.insertMany(Airports)
    console.log('created airports!')
}

const run = async () => {
    await main()
    db.close()
}


run()
