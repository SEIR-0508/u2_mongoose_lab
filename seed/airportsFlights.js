const db = require('../db')
const {Airports, Flights} = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const air = async () => {
    const airports = [
    {   name: "OHare International Airport",
        location: "10000 W Balmoral Ave, Chicago, IL 60666",
        code: "ORD",
    
    },
    {   name: "Toronto Pearson International Airport",
        location: "6301 Silver Dartt Dr, Mississauga, ON L5P 1B2, Canada",
        code: "YYZ"
    },
    {
        name: "Yuma International Airport",
        location: "2191 E 32nd St #218, Yuma, AZ 85365",
        code: "YUM"
    },
    {
        name: "Hamad International Airport",
        location: "24659, Doha, Quatar",
        code: "DOH"
    }
    ]
    await Airports. insertMany(airports)
    console.log('Created Airport!')
}


    const flight = async () => {
        const ORD = await Airports.find({code: 'ORD'})
        const YYZ = await Airports.find({code: 'YYZ'})
        const YUM = await Airports.find({code: 'YUM'})
        const DOH = await Airports.find({code: 'DOH'})
      const flights = [
        {
            airline: "United Airlines",
            flight_number: 00010,
            price: 350.00,
            number_of_seats: 2,
            departing_airport: ORD[0],
            arrival_airport: YYZ[0]._id,
            departure_date_time: "5/31/2023 - 07:30"

        },
        {
            airline: "United Airlines",
            flight_number: 00011,
            price: 400.00,
            number_of_seats: 2,
            departing_airport: YUM[0]._id,
            arrival_airport: ORD[0]._id,
            departure_date_time: "5/31/2023 - 10:30"

        },
        {
            airline: "United Airlines",
            flight_number: 00012,
            price: 600.00,
            number_of_seats: 2,
            departing_airport: YUM[0]._id,
            arrival_airport: YYZ[0]._id,
            departure_date_time: "5/31/2023 - 12:00"

        },
        {
            airline: "United Airlines",
            flight_number: 00013,
            price: 1450.00,
            number_of_seats: 2,
            departing_airport: ORD[0]._id,
            arrival_airport: DOH[0]._id,
            departure_date_time: "5/31/2023 - 20:15"

        },
        {
            airline: "United Airlines",
            flight_number: 00014,
            price: 2000.00,
            number_of_seats: 2,
            departing_airport: DOH[0]._id,
            arrival_airport: YYZ[0]._id,
            departure_date_time: "5/31/2023 - 19:05"

        },
        {
            airline: "United Airlines",
            flight_number: 00015,
            price: 1500.00,
            number_of_seats: 2,
            departing_airport: YUM[0]._id,
            arrival_airport: DOH[0]._id,
            departure_date_time: "5/31/2023 - 20:00"

        },
        {
            airline: "United Airlines",
            flight_number: 00016,
            price: 250.50,
            number_of_seats: 2,
            departing_airport: ORD[0]._id,
            arrival_airport: YUM[0]._id,
            departure_date_time: "5/31/2023 - 21:00"

        },
        {
            airline: "United Airlines",
            flight_number: 00017,
            price: 350.00,
            number_of_seats: 2,
            departing_airport: YYZ[0]._id,
            arrival_airport: ORD[0]._id,
            departure_date_time: "5/31/2023 - 07:00"

        }

      ]  
      await Flights.insertMany(flights)
      console.log('Created Flight')
    }
    
    const run = async () => {
        await flight()
        db.close()
    }

run()
