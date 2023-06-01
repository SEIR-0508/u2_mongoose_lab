const db = require('../db')
const { Airport } = require('../models')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))
const main = async () => {
  const airports = [
    {
      name: 'Pittsburgh International Airport',
      location: 'Pittsburgh, PA',
      code: 'PIT'
    },
    {
      name: 'LaGuardia Airport',
      location: 'New York, NY',
      code: 'LGA'
    }, 
    {
      name: 'Los Angeles International Airport',
      location: 'Los Angeles, California',
      code: 'LAX'
    },
    {
      name: 'Denver International Airport',
      location: 'Denver, Colorado',
      code: 'DEN'
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