
const db = require('../db')
const Airport = require('../models/airport')
const Flight = require('../models/flight')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

  const  airports = [
    {name: 'Toronto Pearson International Airport', location: 'missisauga, Canada', code: 'YYZ'},
    {name: 'Los Angeles International Airport ', location: 'Los Angeles, California', code: 'LAX'},
    {name: 'Frankfurt Airport ', location: 'Frankfurt, Germany', code: 'FRA'},
    {name: 'London Heathrow Airport ', location: 'London, UK', code: 'LHR'}
 ]

const flights = [
  {
    airline: 'Air Canada',
    flightNumber: 123,
    price: 200,
    numberOfSeats: 10,
    departingAirport: airports[0],
    arrivalAirport: airports[2],
    departureDate_Time: Date.now
   },
  {
    airline: 'Delta Air Lines',
    flightNumber: 456,
    price: 300,
    numberOfSeats: 43,
    departingAirport: airports[1],
    arrivalAirport: airports[0],
    departureDate_Time: Date.now

  },
  {
    airline: 'British Airways',
    flightNumber: 789,
    price: 250,
    numberOfSeats: 64,
    departingAirport: airports[2],
    arrivalAirport: airports[0],
    departureDate_Time: Date.now 

  },
  {
    airline: 'Lufthansa',
    flightNumber: 012,
    price: 280,
    numberOfSeats: 23,
    departingAirport: airports[3],
    arrivalAirport: airports[2],
    departureDate_Time: Date.now

  },
  {
    airline: 'Air France',
    flightNumber: 456,
    price: 245,
    numberOfSeats: 77,
    departingAirport: airports[3],
    arrivalAirport: airports[1],
    departureDate_Time:  Date.now 

  },
  {
    airline: 'WestJet',
    flightNumber: 678,
    price: 600,
    numberOfSeats: 34,
    departingAirport: airports[0],
    arrivalAirport: airports[3],
    departureDate_Time:  Date.now 

  },
  {
    airline: 'American Airlines',
    flightNumber: 901,
    price: 500,
    numberOfSeats: 45,
    departingAirport: airports[2],
    arrivalAirport: airports[3],
    departureDate_Time:  Date.now

  }
    
]
 try {

  const savedAirports = await Airport.insertMany(airports)

  const airportIds = savedAirports.map(airport => airport._id)

  const flightsWithAirportIds = flights.map(flight => ({...flight,
    departingAirport: airportIds[flight.departingAirport],
    arrivalAirport: airportIds[flight.arrivalAirport]
  }))

  await Flight.insertMany(flightsWithAirportIds)
  console.log('Created flights')
 }catch {
    console.error('Error creating flights', error.message)
 }
 db.close()
}

const run = async () => {
  await main()
}

run()
