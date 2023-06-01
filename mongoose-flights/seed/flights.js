const db = require('../db')
const { Airport, Flight } = require('../models')

db.on('error', console.error.bind('MongoDB Connection Error'))

const main = async() => {
    const lga = await Airport.find({name: 'LaGuardia Airport'})
    const jfk = await Airport.find({name:'John F Kennedy International Airport'})
    const lgn = await Airport.find({name:'Logan Airport'})
    const lax = await Airport.find({name:'Los Angeles International Airport'})
    const sfo = await Airport.find({name: 'San Francisco Airport'})
    const phl = await Airport.find({name: 'Philadelphia International Airport'})
    const flights = [
        {
            airline: 'United',
            flightNumber: 74,
            price: 120.2,
            numberOfSeats: 2,
            departingAirport: lga[0]._id,
            arrivalAirport: lax[0]._id,
            departureDateTime: 'June 6 @ 12:00 pm'
        },
        {
            airline: 'Southwest',
            flightNumber: 34,
            price: 35.4,
            numberOfSeats: 1,
            departingAirport: lga[0]._id,
            arrivalAirport: jfk[0]._id,
            departureDateTime: 'June 12 @ 1:00 pm'
        },
        {
            airline: 'Frontier',
            flightNumber: 100,
            price: 89.3,
            numberOfSeats: 1,
            departingAirport: lgn[0]._id,
            arrivalAirport: phl[0]._id,
            departureDateTime: 'June 2 @ 11:00 pm'
        },
        {
            airline: 'United',
            flightNumber: 89,
            price: 110.4,
            numberOfSeats: 1,
            departingAirport: lga[0]._id,
            arrivalAirport: lax[0]._id,
            departureDateTime: 'July 6 @ 1:00 pm'
        },
        {
            airline: 'Delta',
            flightNumber: 52,
            price: 134.2,
            numberOfSeats: 2,
            departingAirport: lga[0]._id,
            arrivalAirport: lax[0]._id,
            departureDateTime: 'August 6 @ 12:00 pm'
        },
        {
            airline: 'Frontier',
            flightNumber: 42,
            price: 143.6,
            numberOfSeats: 2,
            departingAirport: phl[0]._id,
            arrivalAirport: sfo[0]._id,
            departureDateTime: 'July 4 @ 3:00 pm'
        },
        {
            airline: 'American',
            flightNumber: 243,
            price: 224.8,
            numberOfSeats: 1,
            departingAirport: lga[0]._id,
            arrivalAirport: lax[0]._id,
            departureDateTime: 'July 2 @ 12:00 pm'
        },
        {
            airline: 'Frontier',
            flightNumber: 325,
            price: 124.8,
            numberOfSeats: 2,
            departingAirport: lgn[0]._id,
            arrivalAirport: sfo[0]._id,
            departureDateTime: 'June 3 @ 2:00 pm'
        }
    ]
    await Flight.insertMany(flights)
    console.log('added a bunch of flights')
}

const run = async() =>{
    await main()
    db.close()
}

run()