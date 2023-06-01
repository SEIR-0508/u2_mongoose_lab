const db = require('../db')
const { Flight, Airport } = required('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const airports = await Airport.find()
    const flights = [
        {
            airline: "American Airline",
            flightNumber: AA123,
            price: 500,
            numberOfSeats: 60,
            departingAirport: ,
            arrivalAirport: { type: Schema.Types.ObjectId, ref: 'Airport', required: true },
            departureDate: 2023-05-02,
        },
    ]
}