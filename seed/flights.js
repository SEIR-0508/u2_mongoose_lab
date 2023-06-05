const db = require('../db')
const { Airports, Flights } = require('../models')

db.on('error', console.error.bind(console, 'connection error'))

const main = async () => {
    const LAX = await Airports.find({code:'LAX'})
    const LHR = await Airports.find({code:'LHR'})
    const CDG = await Airports.find({code:'CDG'})
    const HND = await Airports.find({code:'HND'})
    const PVG = await Airports.find({code:'PVG'})

    const flights = [
        {
            airline: 'American Airlines',
            flightNumber: '2938',
            price: '560',
            numberOfSeats: '853',
            departingAirPort: LAX[0]._id,
            arrivalAirport: CDG[0]._id,
            departureDate: new Date('2023-02-05T12:43:23Z')
        },
        {
            airline: 'British Airways',
            flightNumber: '8473',
            price: '345',
            numberOfSeats: '560',
            departingAirPort: LHR[0]._id,
            arrivalAirport: CDG[0]._id,
            departureDate: new Date('2023-01-23T12:35:23Z')
        },
        {
            airline: 'Air France',
            flightNumber: '6374',
            price: '673',
            numberOfSeats: '739',
            departingAirPort: CDG[0]._id,
            arrivalAirport: PVG[0]._id,
            departureDate: new Date('2023-01-12T16:42:23Z')
        },
        {
            airline: 'Japan Airlines',
            flightNumber: '3748',
            price: '328',
            numberOfSeats: '325',
            departingAirPort: HND[0]._id,
            arrivalAirport: PVG[0]._id,
            departureDate: new Date('2023-04-12T17:43:45Z')
        },
        {
            airline: 'China Southern Airlines',
            flightNumber: '9382',
            price: '930',
            numberOfSeats: '853',
            departingAirPort: PVG[0]._id,
            arrivalAirport: CDG[0]._id,
            departureDate: new Date('2023-05-05T09:33:23Z')
        },
        {
            airline: 'China Airlines',
            flightNumber: '8792',
            price: '437',
            numberOfSeats: '465',
            departingAirPort: PVG[0]._id,
            arrivalAirport: HND[0]._id,
            departureDate: new Date('2023-06-01T11:14:23Z')
        },
        {
            airline: 'United Airlines',
            flightNumber: '8297',
            price: '796',
            numberOfSeats: '763',
            departingAirPort: CDG[0]._id,
            arrivalAirport: LAX[0]._id,
            departureDate: new Date('2023-03-12T15:42:15Z')
        }
    ]

    await Flights.insertMany(flights)
    console.log('successfully insert flights')
}

const run = async () => {
    await main()
    db.close
}

run()