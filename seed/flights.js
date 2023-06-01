const db = require('../db')
// when I had this as { Airport, Flight } the departing & arriving airport codes reverted to the chance.radio codes
// but flipping them back to { Flight, Airport } fixed it so that the dep/arr airports are the four codes of the actual airports I chose...
const { Flight, Airport } = require('../models')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))



const main = async () => {
    const airports = await Airport.find({})

    const flights = [
        {
            airline: 'Delta',
            flight_number: 'D1409',
            price: 400,
            numberOfSeats: 80,
            departingAirport: airports[3]._id,
            arrivalAirport: airports[2]._id,
            departure_date_time: '05/18/2024 13:44'
        },
        {
            airline: 'United',
            flight_number: 'UA287',
            price: 300,
            numberOfSeats: 68,
            departingAirport: airports[1].map((airport) => airport._id),
            arrivalAirport: airports[3].map((airport) => airport._id),
            departure_date_time: '06/09/2023 15:25'
        },
        {
            airline: 'JetBlue',
            flight_number: 'JB46',
            price: 350,
            numberOfSeats: 60,
            departingAirport: airports[0]._id,
            arrivalAirport: airports[3]._id,
            departure_date_time: '01/26/2024 08:29'
        },
        {
            airline: 'United',
            flight_number: 'UA9924',
            price: 400,
            numberOfSeats: 88,
            departingAirport: airports[2]._id,
            arrivalAirport: airports[0]._id,
            departure_date_time: '12/05/2023 17:59'
        },
        {
            airline: 'Southwest',
            flight_number: 'SW007',
            price: 500,
            numberOfSeats: 100,
            departingAirport: airports[1]._id,
            arrivalAirport: airports[0]._id,
            departure_date_time: '09/09/2023 06:02'
        },
        {
            airline: 'American',
            flight_number: 'AA574',
            price: 450,
            numberOfSeats: 96,
            departingAirport: airports[3]._id,
            arrivalAirport: airports[1]._id,
            departure_date_time: '03/24/2025 11:00'
        },
        {
            airline: 'Delta',
            flight_number: 'D6572',
            price: 400,
            numberOfSeats: 88,
            departingAirport: airports[0]._id,
            arrivalAirport: airports[2]._id,
            departure_date_time: '10/31/2023 23:59'
        },
    ]
    await Flight.insertMany(flights)
    console.log('created flights')
    return flights
}

const run = async () => {
    await main()
    db.close()
}

run()