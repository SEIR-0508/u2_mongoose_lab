const db = require('../db')
const { Airport, Flight } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () => {
    const flyingMachines = await Airport.find({name: "Flying Machines R Us"})
    const flySafe = await Airport.find({name: 'Fly Safe'})
    const notFalling = await Airport.find({name:'Definitely Not Falling'})
    const flyAway = await Airport.find({name:'Fly Away'})
    const ANU = await Airport.find({name:'Airport Numba One'})
    const weFlyinBoys = await Airport.find({name:'We Flyin Boys'})
    const pFly = await Airport.find({name:'Potato Flight'})
    const noSplice  = await Airport.find({name:'Splice Bad Idea'})

const flights = [
    {
        airline: 'Flying Machines R Us',
        flightNumber:2345,
        price: 3.50,
        numberOfSeats:150,
        departingAirport:noSplice[0]._id,
        arrivalAirport:pFly[0]._id,
        departure:2023-11-12
    },
    {
        airline:'Fly Safe',
        flightNumber:5432,
        price:4.50,
        numberOfSeats:150,
        departingAirport:weFlyinBoys[0]._id,
        arrivalAirport:ANU[0]._id,
        departure:2023-11-12
    },
    {
        airline:' Definitely Not Falling ',
        flightNumber:4567,
        price:5.50,
        numberOfSeats:150,
        departingAirport:flyAway[0]._id,
        arrivalAirport:noSplice[0]._id,
        departure:2023-11-12
    },
    {
        airline:' Fly Away ',
        flightNumber:7645,
        price:6.50,
        numberOfSeats:100,
        departingAirport:ANU[0]._id,
        arrivalAirport:weFlyinBoys[0]._id,
        departure:2023-11-12
    },
    {
        airline:' Airport Numba One ',
        flightNumber:2357,
        price:7.60,
        numberOfSeats:75,
        departingAirport:flyAway[0]._id,
        arrivalAirport:notFalling[0]._id,
        departure:2023-11-12
    },
    {
        airline:' We Flyin Boys ',
        flightNumber:2452,
        price:3.75,
        numberOfSeats:100,
        departingAirport:noSplice[0]._id,
        arrivalAirport:flySafe[0]._id,
        departure:2023-11-12
    },
    {
        airline:' Potato Flight ',
        flightNumber:4226,
        price:1.00,
        numberOfSeats:98,
        departingAirport:flyingMachines[0]._id,
        arrivalAirport:ANU[0]._id,
        departure:2023-11-12
    },
    {
        airline:' Splice Bad Idea ',
        flightNumber:4205,
        price:0.90,
        numberOfSeats:5,
        departingAirport:flyingMachines[0]._id,
        arrivalAirport:noSplice[0]._id,
        departure:2023-11-12
    },
    {
        airline: "Flying Machines R Us",
        flightNumber:9867,
        price:3.29,
        numberOfSeats:387,
        departingAirport:pFly[0]._id,
        arrivalAirport:flyingMachines[0]._id,
        departure:2023-11-12
    }
]
await Flight.insertMany(flights)
}

const run = async () => 
{
    await main()
    db.close()
}


run()