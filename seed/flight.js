const db = require('../db')
const { Airport, Flight } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const MIA = await Airport.find({ name: 'Miami International Airport'})
    const LAX = await Airport.find({ name: 'Los Angeles International Airport'})
    const JFK = await Airport.find({ name: 'John F. Kennedy International Airport'})
    const BOS = await Airport.find({ name: 'Boston Logan International Airport'})
    const DEN = await Airport.find({ name: 'Denver International Airport'})

    const flights = [
        {
            airline: 'Delta',
            flight_number: 313,
            price: '$453',
            numberOfSeats: 162,
            departingAirport: DEN[0]._id,
            arrivalAirport: JFK[0]._id,
            departure_dateAndTime: '11:59 PM.  Wed, May 31'
        },
        {
            airline: 'JetBlue',
            flight_number: 187,
            price: '$498',
            numberOfSeats: 180,
            departingAirport: BOS[0]._id,
            arrivalAirport: LAX[0]._id,
            departure_dateAndTime: '6:30 PM.  Wed, May 31'
        },
        {
            airline: 'United',
            flight_number: 204,
            price: '$631',
            numberOfSeats: 180,
            departingAirport: BOS[0]._id,
            arrivalAirport: MIA[0]._id,
            departure_dateAndTime: '8:49 PM.  Wed, May 31'
        },
        {
            airline: 'American',
            flight_number: 1629,
            price: '$684',
            numberOfSeats: 220,
            departingAirport: DEN[0]._id,
            arrivalAirport: MIA[0]._id,
            departure_dateAndTime: '11:47 PM.  Wed, May 31'
        },
        {
            airline: 'JetBlue',
            flight_number: 1723,
            price: '$818',
            numberOfSeats: 220,
            departingAirport: JFK[0]._id,
            arrivalAirport: LAX[0]._id,
            departure_dateAndTime: '10:29 PM.  Wed, May 31'
        },
        {
            airline: 'American',
            flight_number: 1357,
            price: '$488',
            numberOfSeats: 162,
            departingAirport: MIA[0]._id,
            arrivalAirport: JFK[0]._id,
            departure_dateAndTime: '9:00 PM.  Wed, May 31',
        },
        {
            airline: 'Delta',
            flight_number: 2769,
            price: '$701',
            numberOfSeats: 162,
            departingAirport: BOS[0]._id,
            arrivalAirport: DEN[0]._id,
            departure_dateAndTime: '10:00 PM. Wed, May 31',
        }
    ]
    await Flight.insertMany(flights)
    console.log('Created flights with Airports!')
}

const run = async () => {
    await main()
    db.close()
}

run()