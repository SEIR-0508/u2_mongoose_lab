const db = require('../db')
const { Flight, Airport } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const createAirports = async () => {
  const airports = [ 
    {
      name: "John Airport",
      location: "Dallas",
      code: "15564"
    },
    {
      name: "Clarence Airport",
      location: "El Paso",
      code: "24456"
    },
    {
      name: "Pappas Airport",
      location: "Houston",
      code: "37765"
    },
    {
      name: "Mammas Airport",
      location: "Austin",
      code: "43346"
    },
  ]
  await Airport.insertMany(airports)
  console.log('created airports')
  return airports
}
const createFlightsWithAirports = async (airports) => {
  const flights = [
    {
      airline: "1st Airline",
      flightNumber: 1,
      price: 999.99,
      numberOfSeats: 10,
      departingAirport: ((Airport)._id),
      arrivalAirport: ((Airport)._id),
      departureDate: "10-27-2002",
    },
    {
      airline: "2nd Airline",
      flightNumber: 2,
      price: 999.99,
      numberOfSeats: 10,
      departingAirport: ((Airport)._id),
      arrivalAirport: ((Airport)._id),
      departureDate: "10-28-2002",
    },
    {
      airline: "3rd Airline",
      flightNumber: 3,
      price: 999.99,
      numberOfSeats: 20,
      departingAirport: ((Airport)._id),
      arrivalAirport: ((Airport)._id),
      departureDate: "10-27-2002",
    },
    {
      airline: "4th Airline",
      flightNumber: 4,
      price: 999.99,
      numberOfSeats: 20,
      departingAirport: ((Airport)._id),
      arrivalAirport: ((Airport)._id),
      departureDate: "10-28-2002",
    },
    {
      airline: "5th Airline",
      flightNumber: 5,
      price: 999.99,
      numberOfSeats: 20,
      departingAirport: ((Airport)._id),
      arrivalAirport: ((Airport)._id),
      departureDate: "10-29-2002",
    },
    {
      airline: "6th Airline",
      flightNumber: 6,
      price: 999.99,
      numberOfSeats: 25,
      departingAirport: ((Airport)._id),
      arrivalAirport: ((Airport)._id),
      departureDate: "10-27-2002",
    },
    {
      airline: "7th Airline",
      flightNumber: 7,
      price: 999.99,
      numberOfSeats: 25,
      departingAirport: ((Airport)._id),
      arrivalAirport: ((Airport)._id),
      departureDate: "10-28-2002",
    },
  ]
  await Flight.insertMany(flights)
  console.log('created flights')
}

const run = async () => {
  const airports = await createAirports()
  await createFlightsWithAirports(airports)
  db.close()
}

run()