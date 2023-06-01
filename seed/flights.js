const db = require('../db')
const { Airport, Flight } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const createFlights = async() => {
    const IAD = await Airport.find({ code: 'IAD' })
    const DEN = await Airport.find({ code: 'DEN' })
    const MCO = await Airport.find({ code: 'MCO' })
    const DCA = await Airport.find({ code: 'DCA' })

    const flights = [
        {
            airline: 'United',
            flight_number: 6032,
            price: 149.99,
            numberOfSeats: 37,
            departingAirport: IAD[0]._id,
            arrivalAirport: MCO[0]._id,
            departure_date_time: '2023-06-05',
        },
        {
            airline: 'American',
            flight_number: 7826,
            price: 129.99,
            numberOfSeats: 86,
            departingAirport: IAD[0]._id,
            arrivalAirport: DEN[0]._id,
            departure_date_time: '2023-07-13',
        },
        {
            airline: 'United',
            flight_number: 6075,
            price: 179.99,
            numberOfSeats: 15,
            departingAirport: DCA[0]._id,
            arrivalAirport: MCO[0]._id,
            departure_date_time: '2023-06-17',
        },
        {
            airline: 'Southwest',
            flight_number: 1688,
            price: 74.99,
            numberOfSeats: 47,
            departingAirport: DEN[0]._id,
            arrivalAirport: MCO[0]._id,
            departure_date_time: '2023-08-15',
        },
        {
            airline: 'Jet Blue',
            flight_number: 1252,
            price: 99.99,
            numberOfSeats: 25,
            departingAirport: DCA[0]._id,
            arrivalAirport: DEN[0]._id,
            departure_date_time: '2023-09-02',
        },
        {
            airline: 'United',
            flight_number: 6002,
            price: 155.05,
            numberOfSeats: 34,
            departingAirport: MCO[0]._id,
            arrivalAirport: DCA[0]._id,
            departure_date_time: '2023-07-02',
        },
        {
            airline: 'American',
            flight_number: 7815,
            price: 116.95,
            numberOfSeats: 10,
            departingAirport: MCO[0]._id,
            arrivalAirport: DEN[0]._id,
            departure_date_time: '2023-05-31',
        }
    ]

    await Flight.insertMany(flights)
    console.log('Created flights!')
}

const run = async () => {
    await createFlights()
    db.close()
}

run()

