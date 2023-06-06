const db = require('../db')
const { Airport } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const airports = [
    {
      name: 'London Heathrow International Airport',
      location: 'Longford TW6, UK',
      code: 'LHR'
    },
    {
      name: 'John F. Kennedy International Airport',
      location: 'JFK Expy & S Cargo Rd Jamaica, NY 11430',
      code: 'JFK'
    },
    {
      name: 'Miami International Airport',
      location: '2100 NW 42nd Ave, Miami, FL 33142',
      code: 'MIA'
    },
    {
      name: 'Istanbul International Airport',
      location: 'Tayakadın, Terminal Cad No:1, 34283 Arnavutköy/İstanbul, Türkiye',
      code: 'IST'
    },
    {
      name: 'Phoenix Skyharbor International Airport',
      location: '3400 E Sky Harbor Blvd, Phoenix, AZ 85034',
      code: 'PHX'
    },
    {
      name: 'Dallas Fortworth International Airport',
      location: '2400 Aviation Dr, DFW Airport, TX 75261',
      code: 'DFW'
    },
    {
      name: 'Honolulu International Airport',
      location: '22 Airport Way',
      code: 'HON'
    },
    {
      name: 'Incheon International Airport',
      location: '272 Gonghang-ro, Jung-ju, Incheon, South Korea',
      code: 'ICN'
    },
    {
      name: 'Los Angeles International Airport',
      location: '1 World Way, PO Box 92216, Los Angeles, CA,',
      code: 'LAX'
    },
    {
      name: 'Athens International Airport',
      location: 'Attiki Odos, Spata 190 04, Greece',
      code: 'ATH'
    },
  ]
  await Airport.deleteMany() //erases whole table
  await Airport.insertMany(airports)
  console.log('Airports!')
}

const run = async () => {
  await main()
  db.close()
}

run()