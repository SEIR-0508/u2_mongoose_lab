const db = require('../db')
const { Airport, Flight } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const airports = await Airport.find({})

  const flights = [
    {
        airline: 'American Airlines',
        flightNumber: 3745,
        price: 250.50,
        numberOfSeats: 100,
        departingAirport: airports[0]._id,
        arrivalAirport: airports[1]._id,
        departureDateTime: new Date()
    },
    {
        airline: 'Delta Airlines',
        flightNumber: 1234,
        price: 200.75,
        numberOfSeats: 80,
        departingAirport: airports[2]._id,
        arrivalAirport: airports[3]._id,
        departureDateTime: new Date()
    },
    {
      airline: 'United Airlines',
      flightNumber: 3768,
      price: 198.76,
      numberOfSeats: 90,
      departingAirport: airports[3]._id,
      arrivalAirport: airports[1]._id,
      departureDateTime: new Date()
    },
    {
      airline: 'Southwest Airlines',
      flightNumber: 8795,
      price: 87.90,
      numberOfSeats: 120,
      departingAirport: airports[2]._id,
      arrivalAirport: airports[0]._id,
      departureDateTime: new Date()
    },
    {
      airline: 'American Airlines',
      flightNumber: 354,
      price: 115.90,
      numberOfSeats: 70,
      departingAirport: airports[1]._id,
      arrivalAirport: airports[2]._id,
      departureDateTime: new Date()
    },
    {
      airline: 'United Airlines',
      flightNumber: 635,
      price: 160.00,
      numberOfSeats: 85,
      departingAirport: airports[0]._id,
      arrivalAirport: airports[3]._id,
      departureDateTime: new Date()
    },
    {
      airline: 'Southwest Airlines',
      flightNumber: 1467,
      price: 235.60,
      numberOfSeats: 105,
      departingAirport: airports[1]._id,
      arrivalAirport: airports[3]._id,
      departureDateTime: new Date()
    }
  ]

  await Flight.insertMany(flights)
  console.log('Created flights with airports!')
}
const run = async () => {
  await main()
  db.close()
}

run()