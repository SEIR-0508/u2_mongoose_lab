const db = require('../db')
const Chance = require('chance')
const { Airport, Flight } = require('../models')

const chance = new Chance()

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const createAirports = async () => { //reverse engineer from previous lab --> all Variables substituted
    const Airports = [...Array(4)].map(() => { // Remove the parameter name 'Airport' // --> Chat GPT
        return new Airport({
            name: chance.word(),
            location: chance.address(),
            code: chance.integer({ min: 1000, max: 9999 }) // Generate a random integer code // --> Chat GPT
        })
    })
    await Airport.insertMany(Airports)
    // console.log('Created Airports!')
    console.log('Created Airports:', Airports); // Log the created airports
    return Airports
}

// const createFlightsWithAirports = async (Airports) => {
//     const Flights = [...Array(7)].map(() => {
//         // Randomly select departing and arrival airports from the available Airports
//         const departingAirport = Airports[Math.floor(Math.random() * Airports.length)]._id; // // --> Chat GPT
//         const arrivalAirport = Airports[Math.floor(Math.random() * Airports.length)]._id; // // --> Chat GPT

//         return new Flight({ //reverse Engineer from createAirports
//             airline: chance.company(),
//             flightNumber: chance.integer(), 
//             price: chance.floating({ min: 0, max: 1 }),
//             numberOfSeats: chance.integer(), 
//             departingAirport: departingAirport,
//             arrivalAirport: arrivalAirport,
//             departureDateTime: chance.date()
//         });
//     });

//     await Flight.insertMany(Flights);
//     // console.log('Created Flights!');
//     console.log('Created Flights:', Flights); // Log the created flights
//     return Flights;
// }

//////////
const createFlightsWithAirports = async (Airports) => {
    const Flights = [...Array(7)].map(() => {
        // Randomly select departing and arrival airports from the available Airports
        const departingAirport = Airports[Math.floor(Math.random() * Airports.length)]._id; // // --> Chat GPT error fix
        const arrivalAirport = Airports[Math.floor(Math.random() * Airports.length)]._id; // // --> Chat GPT error fix

        const minFlightNumber = 1000;
        const maxFlightNumber = 9999;
        const flightNumber = chance.integer({ min: minFlightNumber, max: maxFlightNumber }); // --> Chat GPT (more realistic value)

        const minPrice = 100.0;
        const maxPrice = 1000.0;
        const price = chance.floating({ min: minPrice, max: maxPrice, fixed: 2 }); // --> Chat GPT (more realistic value)

        const minNumberOfSeats = 50;
        const maxNumberOfSeats = 300;
        const numberOfSeats = chance.integer({ min: minNumberOfSeats, max: maxNumberOfSeats }); // --> Chat GPT (more realistic value)

        return new Flight({
            airline: chance.company(),
            flightNumber: flightNumber, // --> Chat GPT 
            price: price, // --> Chat GPT
            numberOfSeats: numberOfSeats, // --> Chat GPT
            departingAirport: departingAirport,
            arrivalAirport: arrivalAirport,
            departureDateTime: chance.date()
        });
    });

    await Flight.insertMany(Flights);
    // console.log('Created Flights!');
    console.log('Created Flights:', Flights); // Log the created flights
    return Flights;
}

///////////
const run = async () => {
    const Airports = await createAirports()
    await createFlightsWithAirports(Airports)
    db.close()
}

run()

//Asked chat GPT what was wong with my code and it fixed the top two lines above and also to make some values more realistic using chance.

// node seed/AirportFlight.js to run