const db = require('../db')
const { Airport, Flight } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () => {
    const SFO = await Airport.find({code: 'SFO'})
    const JFK = await Airport.find({code: 'JFK'}) 
    const ATL = await Airport.find({code: 'ATL'})
    const STL = await Airport.find({code: 'STL'})

    const flights =  [
        {
            airline: 'Delta Air Lines',
            flight_number: 487,
            price: 400.00,
            numberOfSeats: 200,
            departingAirport: SFO[0]._id,
            arrivalAirport: JFK[0]._id,
            departure_date_time: '2023-05-31-1000'
        },
        {
            airline: 'Southwest Airlines',
            flight_number: 581,
            price: 500.00,
            numberOfSeats: 200,
            departingAirport: SFO[0]._id,
            arrivalAirport: ATL[0]._id,
            departure_date_time: '2023-06-01-1800'
        },
        {
            airline: 'United Airlines',
            flight_number: 930,
            price: 300.00,
            numberOfSeats: 200, 
            departingAirport: ATL[0]._id,
            arrivalAirport: JFK[0]._id,
            departure_date_time: '2023-06-02-1400'
        },
        {
            airline: 'American Airlines',
            flight_number: 719,
            price: 300.00,
            numberOfSeats: 200, 
            departingAirport: JFK[0]._id,
            arrivalAirport: STL[0]._id,
            departure_date_time: '2023-06-03-0900'
        },
        {
            airline: 'Delta Air Lines',
            flight_number: 396,
            price: 300.00,
            numberOfSeats: 200, 
            departingAirport: STL[0]._id,
            arrivalAirport: SFO[0]._id,
            departure_date_time: '2023-06-04-1100'
        },
        {
            airline: 'Southwest Airlines',
            flight_number: 739,
            price: 500.00,
            numberOfSeats: 200, 
            departingAirport: JFK[0]._id,
            arrivalAirport: SFO[0]._id,
            departure_date_time: '2023-06-05-1300'
        },
        {
            airline: 'United Airlines',
            flight_number: 553,
            price: 400.00,
            numberOfSeats: 200, 
            departingAirport: JFK[0]._id,
            arrivalAirport: ATL[0]._id,
            departure_date_time: '2023-06-06-2300'
        }
    ]
    await Flight.insertMany(flights)
    console.log('created flights with airports!')
}
const run = async () => {
    await main()
    db.close()
}

run()