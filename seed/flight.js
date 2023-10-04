const db = require('../db')
const { Airport, Flight } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const createFlight = async () => {
    const nyc = await Airport.find({name:'New York JFK'})
    const atl = await Airport.find({name: 'Atlanta Hartsfield-Jackson'})
    const bsl = await Airport.find({name: 'United BSL'})
    const ord = await Airport.find({name: "Chicago O'Hare"})

    const flights = [
        {
            airline: 'United',
            flightNumber: 1234,
            price: 400,
            numberOfSeats: 130,
            departingAirport: nyc[0]._id,
            arrivalAirport: atl[0]._id,
            departureDateTime: new Date("2023-10-06T08:20:00Z")
        },
        {
            airline: 'Delta',
            flightNumber: 4567,
            price: 300,
            numberOfSeats: 110,
            departingAirport: ord[0]._id,
            arrivalAirport: bsl[0]._id,
            departureDateTime: new Date("2023-10-15T10:40:00Z")
        },
        {
            airline: 'Spirit',
            flightNumber: 3656,
            price: 600,
            numberOfSeats: 120,
            departingAirport: atl[0]._id,
            arrivalAirport: bsl[0]._id,
            departureDateTime:new Date("2023-10-11T12:00:00Z")
        },
        {
            airline: 'Frontier',
            flightNumber: 9567,
            price: 100,
            numberOfSeats: 70,
            departingAirport: bsl[0]._id,
            arrivalAirport: atl[0]._id,
            departureDateTime: new Date("2023-10-07T15:40:00Z")
        },
        {
            airline: 'United',
            flightNumber: 1234,
            price: 350,
            numberOfSeats: 100,
            departingAirport: nyc[0]._id,
            arrivalAirport: bsl[0]._id,
            departureDateTime: new Date("2023-10-16T00:00:00Z")
        },
        {
            airline: 'Delta',
            flightNumber: 9786,
            price: 260,
            numberOfSeats: 90,
            departingAirport: atl[0]._id,
            arrivalAirport: ord[0]._id,
            departureDateTime: new Date("2023-10-10T04:40:00Z")
        },
        {
            airline: 'United',
            flightNumber: 4566,
            price: 200,
            numberOfSeats: 120,
            departingAirport: ord[0]._id,
            arrivalAirport: bsl[0]._id,
            departureDateTime: new Date("2023-10-20T11:34:00Z")
        }
    ]
    await Flight.insertMany(flights)
    console.log(flights)
}

const run = async () => {
    await createFlight()
    db.close()
}

run()