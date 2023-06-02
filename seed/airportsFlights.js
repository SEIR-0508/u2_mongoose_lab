const db = require(`../db`)
const { Airport, Flight } = require(`../models`)

db.on('error', console.error.bind(`MongoDB connection error: `))


const main = async()=>{
    const airport1= new Airport({
        name: `Los Angeles International Airport`,
        location: `1 World Way, Los Angeles, CA 90045`,
        code: `LAX`
    })
    airport1.save()
        
    const airport2= new Airport({
        name: `Dallas Fort Worth International Airport`,
        location:`2400 Aviation Dr, DFW Airport, TX 75261`,
        code: `DFW`
    })
    airport2.save()

    const airport3= new Airport({
        name: `John F. Kennedy International Airport`,
        location: `Queens, NY 11430`,
        code: `JFK`
    })
    airport3.save()

    const airport4= new Airport({
        name: `O'Hare International Airport`,
        location: `10000 W Balmoral Ave, Chicago, IL 60666`,
        code: `ORD`
    })
    airport4.save()

    console.log(`Created Airports!`)

    const flights = [
        {
            airline: `American Airlines`,
            flight_number: `OKL18`,
            price: 200,
            numberOfSeats: 100,
            departingAirport: airport4._id,
            arrivalAirport: airport3._id,
            departure_date_time: new Date(`2023-06-13T18:45:00`)
        },
        {
            airline: `Southwest Airlines`,
            flight_number: `AK38D`,
            price: 500,
            numberOfSeats:20,
            departingAirport: airport4._id,
            arrivalAirport: airport1._id,
            departure_date_time: new Date(`2023-06-12T14:30:00`)
        },
        {
            airline: `United Airlines`,
            flight_number: `W837F`,
            price: 80,
            numberOfSeats: 50,
            departingAirport: airport2._id,
            arrivalAirport: airport3._id,
            departure_date_time: new Date(`2023-05-28T22:30:00`)
        },
        {
            airline:`British Airways`,
            flight_number: `D93FW`,
            price: 455,
            numberOfSeats: 85,
            departingAirport: airport4._id,
            arrivalAirport: airport2._id,
            departure_date_time: new Date(`2023-05-30T12:25:00`)
        },
        {
            airline: `Emirates`,
            flight_number: `F3RGS`,
            price: 542,
            numberOfSeats: 70,
            departingAirport: airport1._id,
            arrivalAirport: airport3._id,
            departure_date_time: new Date(`2023-06-04T05:30:00`)
        },
        {
            airline: `American Airlines`,
            flight_number: `OK277`,
            price: 613,
            numberOfSeats: 82,
            departingAirport: airport3._id,
            arrivalAirport: airport1._id,
            departure_date_time: new Date('2023-06-01T10:00:00')
        },
        {
            airline: `Southwest Airlines`,
            flight_number: `2R2FF`,
            price: 424,
            numberOfSeats: 100,
            departingAirport: airport1._id,
            arrivalAirport: airport2._id,
            departure_date_time: new Date('2023-06-02T15:30:00')
        }
    ]
    await Flight.insertMany(flights)
    console.log(`Created flights!`)
}



const run = async() =>{
    await main()
    await db.close()
}

run()