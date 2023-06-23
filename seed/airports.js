const db = require('../db')
const { Airport } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const airports = [
        {
            name: `Los Angeles Interactional Airport`,
            location: `Los Angeles, CA`,
            code: `LAX`,
        },
        {
            name: `John F. Kennedy International Airport`,
            location: `New York City, NY`,
            code: `JFK`
        },
        {
            name: `Rhode Island T.F. Green International Airport`,
            location: `Providence, RI`,
            code: `TFG`
        },
        {
            name: `Boston Logan International Airport`,
            location: `Boston, MA`,
            code: `BLA`
        }
    ]
    await Airport.insertMany(airports)
    console.log('Created airports!')
}

const run = async () => {
    await main()
    db.close()
  }
  run()