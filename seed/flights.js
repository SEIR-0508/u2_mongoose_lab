const db = require('../db')
const { Airport, Flight } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const TPA = await Airport.find({code: 'TPA'})
    const JFK = await Airport.find({code: 'JFK'})
    const BOS = await Airport.find({code: 'BOS'})
    const EWR = await Airport.find({code: 'EWR'})

    
    const Flights = [
        { 
            airline: 'JetBlue',
            flight_number: 61,
            price: 400.00,
            numberOfSeats: 80,
            departingAirport: TPA[0]._id,
            arrivalAirport: JFK[0]._id,
            departure_dateAndTime: '05/31/2023'
        },

        {
            airline: 'Delta',
            flight_number: 195,
            price: 500.00,
            numberOfSeats: 200,
            departingAirport: TPA[0]._id,
            arrivalAirport: BOS[0]._id,
            departure_dateAndTime: '05/31/2023'
        },

        {
            airline: 'American',
            flight_number: 222,
            price: 300.00,
            numberOfSeats: 220,
            departingAirport: JFK[0]._id,
            arrivalAirport: TPA[0]._id,
            departure_dateAndTime: '05/31/2023'
        },

        {
            airline: 'Spirit',
            flight_number: 187,
            price: 50.00,
            numberOfSeats: 240,
            departingAirport: EWR[0]._id,
            arrivalAirport: TPA[0]._id,
            departure_dateAndTime: '05/31/2023'
        },

        {
            airline: 'JetBlue',
            flight_number: 757,
            price: 350.00,
            numberOfSeats: 160,
            departingAirport: TPA[0]._id,
            arrivalAirport: EWR[0]._id,
            departure_dateAndTime: '05/31/2023'
        },

        {
            airline: 'Alaska',
            flight_number: 777,
            price: 700.00,
            numberOfSeats: 100,
            departingAirport: BOS[0]._id,
            arrivalAirport: EWR[0]._id,
            departure_dateAndTime: '05/31/2023'
        },

        {
            airline: 'Frontier',
            flight_number: 555,
            price: 350.00,
            numberOfSeats: 120,
            departingAirport: JFK[0]._id,
            arrivalAirport: TPA[0]._id,
            departure_dateAndTime: '05/31/2023'
        }
    ]
    await Flight.insertMany(Flights)
    console.log('created flights with airports')

    }

    const run = async () => {
        await main()
        db.close()
    }

    run()
  
