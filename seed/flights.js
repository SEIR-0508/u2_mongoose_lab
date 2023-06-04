const db = require('../db')
const { Airport, Flight } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const newFlights = async () => {
    const airport = await Airport.find({})
    
    let flights = [
        {
            airline: `American Airlines`,
            flightNumber: '5640',
            price: 97.32,
            numberOfSeats: 34,
            departingAirport: airport[0]._id,
            arrivalAirport: airport[1]._id,
            departureDateTime: 'February 3, 2023 11:23 AM' ,
        },
        {
            airline: `United Airlines`,
            flightNumber: '9584',
            price: 98.43,
            numberOfSeats: 65,
            departingAirport: airport[0]._id,
            arrivalAirport: airport[2]._id,
            departureDateTime: 'June 13, 2023 2:23 PM',
        },
        {
            airline: `Southwest Airlines`,
            flightNumber: '5674',
            price: 9754.00,
            numberOfSeats: 0,
            departingAirport: airport[0]._id,
            arrivalAirport: airport[3]._id,
            departureDateTime: 'January 3, 2023 9:23 AM',
        },
        {
            airline: `Frontier Airlines`,
            flightNumber: '2309',
            price: 468.84,
            numberOfSeats: 7,
            departingAirport: airport[0]._id,
            arrivalAirport: airport[4]._id,
            departureDateTime: 'April 3, 2023 10:23 PM',
        },
        {
            airline: `Spirit Airlines`,
            flightNumber: '4793',
            price: 89.99,
            numberOfSeats: 2,
            departingAirport: airport[1]._id,
            arrivalAirport: airport[2]._id,
            departureDateTime: 'May 31, 2023 5:23 AM',
        },
        {
            airline: `Alaska Airlines`,
            flightNumber: '8594',
            price: 300.00,
            numberOfSeats: 169,
            departingAirport: airport[2]._id,
            arrivalAirport: airport[3]._id,
            departureDateTime: 'August 30, 2023 4:23 AM',
        },
        {
            airline: `Delta Airlines`,
            flightNumber: '5727',
            price: 290.20,
            numberOfSeats: 50,
            departingAirport: airport[3]._id,
            arrivalAirport: airport[4]._id,
            departureDateTime: 'March 23, 2023 8:23 PM',
        },
    ]
    await Flight.insertMany(flights)
    console.log('Created Flights!')
    return flights
}

const run = async () => {
    await newFlights(),
    db.close()
}

run()