const db = require('../db')

const { Airport, Flight } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

//creating parent airport data first

const createAirports = async () => {
    //creating 4 airports

    const airports =  [new Airport({
        name: 'Ronald Reagan Washington National Airport',
        location: 'Arlington, Virginia',
        code: 'DCA'
    }),
    new Airport({
        name: 'John F. Kennedy International Airport',
        location: 'New York City, New York',
        code: 'JFK'
    }),
    new Airport({
        name: 'Los Angeles International Airport',
        location: 'Los Angeles, California',
        code: 'LAX'
    }),
    new Airport({
        name: 'Louis Armstrong New Orleans International Airport',
        location: 'Kenner, Louisiana',
        code: 'MSY'
    })]

    await Airport.insertMany(airports)
    console.log('Created Airports!')
    return airports
}

//creating child data attached 

const createFlights = async (airports) => {
    // console.table(airports)
    let lenOfFlights = 12;
    // creating all 12 possible flights
    let flights = [...Array(lenOfFlights)]
    let flightIndex = 0;
    for (i=0; i<4; i++) {
        for (j=0;j<4; j++) {
            if (i !== j) {
                let depFlight = airports[i];
                let ariFlight = airports[j];
                flights[flightIndex] = new Flight({
                    
                    airline: "United",
                    flight_number: 100+flightIndex,
                    price: 300,
                    numberOfSeats: 64,
                    departingAirport: depFlight._id,
                    arrivalAirport: ariFlight._id,
                    //https://www.mongodb.com/docs/manual/reference/method/Date/ --- will use this to figure out how to set the correct date
                    departure_dateTime: new Date(),
                })
                flightIndex++;
                console.log(flightIndex);
            }
        }
    }
    console.log(flights)
    // flights = flights.map((flight) => new Flight(flight))
    await Flight.insertMany(flights)
    console.log('Created Flights!')
}

// running the above functions to seed the dataset
const run = async () => {
    const airports = await createAirports()
    await createFlights(airports)
    db.close()
}

run()