const db = require('../db')
const { Airport, Flight } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const ord = await Airport.find({ name: "O'hare International Airport" })
  const atl= await Airport.find({ name: 'Hartsfield Jackson Atlanta International Airport' })
  const sfo= await Airport.find({ name: 'San Francisco International Airport' })
  const lax= await Airport.find({ name: 'Los Angeles International Airport' })


  const newFlights = [
    {
        airline: 'United',
        flightNumber: '343',
        price: '343',
        numberOfSeats: '300',
        departingAirport: "6477db975d7e74675a9ce780", 
        // (ord to sfo)
        arrivalAirport: "6477db975d7e74675a9ce782",
        flightNumber: 'UA 2627',
        departureDate: '8/19/2023',
        departureTime: '08:00'
    },
    {
        airline: 'United',
        flightNumber: '2631',
        price: '330',
        numberOfSeats: '300',
        departingAirport: "6477db975d7e74675a9ce782",
        // (sfo to ord)
        arrivalAirport: "6477db975d7e74675a9ce780",
        flightNumber: 'UA 725',
        departureDate: '8/19/20',
        departureTime: '05:00'
    },
    {
        airline: 'Frontier',
        flightNumber: 'F9 1354',
        price: '60',
        numberOfSeats: '300',
        departingAirport: "6477db975d7e74675a9ce781",
        // (atl to ord)
        arrivalAirport: "6477db975d7e74675a9ce780",
        flightNumber: 'F9 1355',
        departureDate: '8/19/2023',
        departureTime: '22:00'
    },
    {
        airline: 'Frontier',
        flightNumber: 'F9 1355',
        price: '60',
        numberOfSeats: '300',
        departingAirport: "6477db975d7e74675a9ce780",
        // (ord to atl)
        arrivalAirport: "6477db975d7e74675a9ce781",
        flightNumber: 'F9 1354',
        departureDate: '8/19/2023',
        departureTime: '13:00'
    },    
    {
        airline: 'American',
        flightNumber: 'AA 201',
        price: '200',
        numberOfSeats: '300',
        departingAirport: "6477db975d7e74675a9ce780",
        // (ord to lax)
        arrivalAirport: "6477db975d7e74675a9ce783",
        flightNumber: 'AA 4879',
        departureDate: '8/19/2023',
        departureTime: '07:00'
    },
    {
        airline: 'Delta',
        flightNumber: 'DL 317',
        price: '300',
        numberOfSeats: '300',
        departingAirport: "6477db975d7e74675a9ce781",
        // (atl to lax)
        arrivalAirport: "6477db975d7e74675a9ce783",
        flightNumber: 'DL 334',
        departureDate: '8/19/2023',
        departureTime: '07:00'
    },
    {
        airline: 'Frontier',
        flightNumber: 'DL 334',
        price: '300',
        numberOfSeats: '300',
        departingAirport: "6477db975d7e74675a9ce783",
        // (lax to atl)
        arrivalAirport: "6477db975d7e74675a9ce781",
        flightNumber: 'DL 317',
        departureDate: '8/19/2023',
        departureTime: '17:00'
    }
  ]

  await Flight.insertMany(newFlights)
  console.log('Created books with publishers!')
}
const run = async () => {
  await main()
  db.close()
}

run()