const db = require('../db')
const { Airport, Flight } = require('../models')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const createAirports = async () => {
    const airports = [
        {
            name: 'Dallas-Forth Worth Airport',
            location: 'Dallas',
            code: 'DFW'
        },

        {
            name: 'Austin-bergstorm',
            location: 'Austin',
            code: 'AUS'
        },

        {
            name: 'Houston Airport',
            location: 'Houston',
            code: 'HOU'
        },

        {
            name: 'San Antonio Airport',
            location: 'San Antonio',
            code: 'SA'
        }
    ]

    await Airport.insertMany(airports)
    console.log('Created Airlines')
}

const createFlightsWithAirports = async () => {
    let airport = await Airport.find({})
    const flights = [
        {
            airline: 'Delta',
            flight_number: 333,
            price: 300,
            numberOfSeats: 50,
            departingAirport: airport[0]._id,
            arrivalAirport: airport[1]._id,
            departureDateTime: new Date()
        },
        {
            airline: 'American Airlines',
            flight_number: 222,
            price: 350,
            numberOfSeats: 50,
            departingAirport: airport[1]._id,
            arrivalAirport: airport[2]._id,
            departureDateTime: new Date()
        },
        {
            airline: 'Spirit',
            flight_number: 444,
            price: 300,
            numberOfSeats: 30,
            departingAirport: airport[3]._id,
            arrivalAirport: airport[1]._id,
            departureDateTime: new Date()
        },
        {
            airline: 'Delta',
            flight_number: 555,
            price: 3200,
            numberOfSeats: 60,
            departingAirport: airport[0]._id,
            arrivalAirport: airport[3]._id,
            departureDateTime: new Date()
        },
        {
            airline: 'American Airlines',
            flight_number: 500,
            price: 320,
            numberOfSeats: 6,
            departingAirport: airport[0]._id,
            arrivalAirport: airport[3]._id,
            departureDateTime: new Date()
        },
        {
            airline: 'Delta',
            flight_number: 5,
            price: 3,
            numberOfSeats: 62,
            departingAirport: airport[2]._id,
            arrivalAirport: airport[3]._id,
            departureDateTime: new Date()
        },
        {
            airline: 'Spirit',
            flight_number: 501,
            price: 3200,
            numberOfSeats: 60,
            departingAirport: airport[0]._id,
            arrivalAirport: airport[1]._id,
            departureDateTime: new Date()
        }

    ]
    await Flight.insertMany(flights)
    console.log('Created Flights')
}

const run = async () => {
    //await createAirports()
    await createFlightsWithAirports()
    db.close()
}
run()