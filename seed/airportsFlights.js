// Import the database connection
const db = require('../db')

// Import the Airport and Flight models from the models file
const { Airport, Flight } = require('../models')

// Error handling for MongoDB connection errors
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    // Array containing data for new airport documents
    const airportsData = [
        { name: 'Logan', location: 'Boston', code: 'LGN' },
        { name: 'LaGuardia', location: 'New York', code: 'LGA' },
        { name: 'Heathrow', location: 'London', code: 'HRT' },
        { name: 'O\'Hare', location: 'Chicago', code: 'OHR' }
    ]

    // Insert the array of airport data into the database, and store the resulting airport documents in the airports variable
    const airports = await Airport.insertMany(airportsData)


    // Array containing data for new flight documents
    const flightsData = [
        { airline: 'American', flightNumber: 101, price: 500, numberOfSeats: 200, departingAirport: airports[0]._id, arrivalAirport: airports[1]._id, departureDateTime: new Date() },
        { airline: 'American', flightNumber: 102, price: 600, numberOfSeats: 300, departingAirport: airports[0]._id, arrivalAirport: airports[1]._id, departureDateTime: new Date() },
        { airline: 'American', flightNumber: 103, price: 700, numberOfSeats: 400, departingAirport: airports[0]._id, arrivalAirport: airports[1]._id, departureDateTime: new Date() },
        { airline: 'Southwest', flightNumber: 201, price: 510, numberOfSeats: 210, departingAirport: airports[1]._id, arrivalAirport: airports[2]._id, departureDateTime: new Date() },
        { airline: 'Southwest', flightNumber: 301, price: 520, numberOfSeats: 220, departingAirport: airports[1]._id, arrivalAirport: airports[2]._id, departureDateTime: new Date() },
        { airline: 'Southwest', flightNumber: 401, price: 530, numberOfSeats: 230, departingAirport: airports[1]._id, arrivalAirport: airports[2]._id, departureDateTime: new Date() },
        { airline: 'Delta', flightNumber: 111, price: 555, numberOfSeats: 222, departingAirport: airports[3]._id, arrivalAirport: airports[3]._id, departureDateTime: new Date() }
    ]

    // Insert the array of flight data into the database
    await Flight.insertMany(flightsData)

    console.log('Seeded airports and flights!')
}

// Invoke the main function, and once it completes, close the database connection
const run = async () => {
await main()
db.close()
}

run()

