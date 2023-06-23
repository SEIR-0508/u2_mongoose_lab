const db = require('../db')
const { Flight } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const airport1 = await Airport.find({ code: 'LAX'})
    const airport2 = await Airport.find({ code: 'JFK'})
    const airport3 = await Airport.find({ code: 'TFG'})
    const airport4 = await Airport.find({ code: 'BLA'})


    const flights = [
        {
            airline: `Delta`,
            flight_number: 463,
            price: 400,
            numberOfSeats: 20,
            departingAirport: airport1[0]._id,
            arrivalAirport: airport2[0]._id,
            departure_date_time: `2-13-58 02:00`
        },
        {
            airline: `JetBlue`,
            flight_number: 453,
            price: 420,
            numberOfSeats: 25,
            departingAirport: airport2[0]._id,
            arrivalAirport: airport3[0]._id,
            departure_date_time: `4-14-59 02:00`
        },
        {
            airline: `Southwest`,
            flight_number: 563,
            price: 980,
            numberOfSeats: 40,
            departingAirport: airport3[0]._id,
            arrivalAirport: airport4[0]._id,
            departure_date_time: `5-15-60 02:00`
        },
        {
            airline: `United`,
            flight_number: 5783,
            price: 800,
            numberOfSeats: 20,
            departingAirport: airport4[0]._id,
            arrivalAirport: airport1[0]._id,
            departure_date_time: `6-20-12 02:00`
        },
        {
            airline: `Delta`,
            flight_number: 2395,
            price: 280,
            numberOfSeats: 10,
            departingAirport: airport4[0]._id,
            arrivalAirport: airport2[0]._id,
            departure_date_time: `10-31-11 02:00`
        },
        {
            airline: `United`,
            flight_number: 34568,
            price: 180,
            numberOfSeats: 50,
            departingAirport: airport4[0]._id,
            arrivalAirport: airport3[0]._id,
            departure_date_time: `2-13-58 02:00`
        },
        {
            airline: `Southwest`,
            flight_number: 34567,
            price: 345,
            numberOfSeats: 46,
            departingAirport: airport2[0]._id,
            arrivalAirport: airport4[0]._id,
            departure_date_time: `2-13-58 02:00`
        }
    ]
    await Flight.insertMany(flights)
    console.log('Created flights!')
}

const run = async () => {
    await main()
    db.close()
  }
  run()