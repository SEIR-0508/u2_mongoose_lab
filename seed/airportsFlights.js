const db = require(`../db`)
const { Airport, Flight } = require(`../models`)

db.on('error', console.error.bind(`MongoDB connection error: `))

const createAirports = async()=>{
    const airports = [
        {
            name: `Los Angeles International Airport`,
            location: `1 World Way, Los Angeles, CA 90045`,
            code: `LAX`
        },
        {
            name: `Dallas Fort Worth International Airport`,
            location:`2400 Aviation Dr, DFW Airport, TX 75261`,
            code: `DFW`
        },
        {
            name: `John F. Kennedy International Airport`,
            location: `Queens, NY 11430`,
            code: `JFK`
        },
        {
            name: `O'Hare International Airport`,
            location: `10000 W Balmoral Ave, Chicago, IL 60666`,
            code: `ORD`
        }
    ]
    await Airport.insertMany(airports)
    console.log(`Created Airports!`)
    return airports
}

const createFlights = async() => {
    let airports = await Airport.find({})
    const flights = [
        {
            airline: `American Airlines`,
            flight_number: `OKL18`,
            price: 200,
            numberOfSeats: 100,
            departingAirport: airports[0]._id,
            arrivalAirport: airports[3]._id,
            departure_date_time: new Date(`2023-06-13T18:45:00`)
        },
        {
            airline: `Southwest Airlines`,
            flight_number: `AK38D`,
            price: 500,
            numberOfSeats:20,
            departingAirport: airports[3]._id,
            arrivalAirport: airports[0]._id,
            departure_date_time: new Date(`2023-06-12T14:30:00`)
        },
        {
            airline: `United Airlines`,
            flight_number: `W837F`,
            price: 80,
            numberOfSeats: 50,
            departingAirport: airports[1]._id,
            arrivalAirport: airports[2]._id,
            departure_date_time: new Date(`2023-05-28T22:30:00`)
        },
        {
            airline:`British Airways`,
            flight_number: `D93FW`,
            price: 455,
            numberOfSeats: 85,
            departingAirport: airports[3]._id,
            arrivalAirport: airports[1]._id,
            departure_date_time: new Date(`2023-05-30T12:25:00`)
        },
        {
            airline: `Emirates`,
            flight_number: `F3RGS`,
            price: 542,
            numberOfSeats: 70,
            departingAirport: airports[0]._id,
            arrivalAirport: airports[2]._id,
            departure_date_time: new Date(`2023-06-04T05:30:00`)
        },
        {
            airline: `American Airlines`,
            flight_number: `OK277`,
            price: 613,
            numberOfSeats: 82,
            departingAirport: airports[2]._id,
            arrivalAirport: airports[0]._id,
            departure_date_time: new Date('2023-06-01T10:00:00')
        },
        {
            airline: `Southwest Airlines`,
            flight_number: `2R2FF`,
            price: 424,
            numberOfSeats: 100,
            departingAirport: airports[0]._id,
            arrivalAirport: airports[1]._id,
            departure_date_time: new Date('2023-06-02T15:30:00')
        }
    ]
    await Flight.insertMany(flights)
    console.log(`Created flights!`)
}

const run = async() =>{
    const airports = await createAirports()
    await createFlights()
    db.close()
}

run()