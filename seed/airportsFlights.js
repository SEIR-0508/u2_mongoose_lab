const db = require('../config/db.js')
const { Airport, Flight } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const addAirports = async function() {
    let airports = [
        {
            name: 'Boston Logan Airport',
            location: 'Boston, MA',
            code: 'BOS'
        },
        {
            name: 'John F Kennedy Airport',
            location: 'New York, NY',
            code: 'JFK'
        },
        {
            name: 'Newark International Airport',
            location: 'Newark, NJ',
            code: 'EWR'
        },
        {
            name: 'San Francisco International Airport',
            location: 'San Francisco, CA',
            code: 'SFO'
        }
    ]

    await Airport.insertMany(airports)
    console.log('Added airports!')
}

const addFlights = async function() {
    let airports = await Airport.find({})

    let flights = [
        {
            airline: 'Delta',
            flightNumber: 412,
            price: 500,
            numberOfSeats: 67,
            departingAirport: airports[0]._id,
            arrivalAirport: airports[1]._id,
            departureDateTime: new Date()
        },
        {
            airline: 'Jetblue',
            flightNumber: 122,
            price: 600,
            numberOfSeats: 62,
            departingAirport: airports[2]._id,
            arrivalAirport: airports[1]._id,
            departureDateTime: new Date()
        },
        {
            airline: 'Spirit',
            flightNumber: 416,
            price: 300,
            numberOfSeats: 82,
            departingAirport: airports[0]._id,
            arrivalAirport: airports[2]._id,
            departureDateTime: new Date()
        },
        {
            airline: 'American',
            flightNumber: 114,
            price: 540,
            numberOfSeats: 85,
            departingAirport: airports[2]._id,
            arrivalAirport: airports[3]._id,
            departureDateTime: new Date()
        },
        {
            airline: 'Frontier',
            flightNumber: 521,
            price: 500,
            numberOfSeats: 67,
            departingAirport: airports[0]._id,
            arrivalAirport: airports[3]._id,
            departureDateTime: new Date()
        },
        {
            airline: 'Delta',
            flightNumber: 402,
            price: 825,
            numberOfSeats: 27,
            departingAirport: airports[2]._id,
            arrivalAirport: airports[3]._id,
            departureDateTime: new Date()
        },
        {
            airline: 'Jetblue',
            flightNumber: 992,
            price: 400,
            numberOfSeats: 82,
            departingAirport: airports[0]._id,
            arrivalAirport: airports[3]._id,
            departureDateTime: new Date()
        },
        {
            airline: 'Delta',
            flightNumber: 942,
            price: 550,
            numberOfSeats: 62,
            departingAirport: airports[1]._id,
            arrivalAirport: airports[2]._id,
            departureDateTime: new Date()
        }
    ]

    await Flight.insertMany(flights)
    console.log('Added flights!')
}

const run = async function () {
    await addAirports()
    await addFlights()
    db.close()
}

run()