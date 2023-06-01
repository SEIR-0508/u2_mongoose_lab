const db = require('./db')
const { Airport, Flight } = require('./models')

async function main () {
    try {
    } catch (error){
        console.log(error)
    } finally {
        await db.close()
    }
}

//USER STORY 1

// const readAirports = async() => {
//     const airports = await Airport.find()
//     console.log(airports)
// }

// const readFlights = async() => {
//    const flights = await Flight.find()
//     console.log(flights)
// }

// async function main () {
//     try{
//         await readAirports()
//         await readFlights()
//     } catch(error){
//         console.log(error)
//     } finally {
//         await db.close()
//     }
// }

// main()

// Console: 
// Jeremys-MacBook-Pro-2:mongoose-flights jeremylemenager$ node query.js
// connected to mongodb
// [
//   {
//     _id: new ObjectId("6477ee0bc9ff9d73bd3a8e66"),
//     name: 'Logan Airport',
//     location: 'Boston',
//     code: 'LGN',
//     __v: 0,
//     createdAt: 2023-06-01T01:02:03.826Z,
//     updatedAt: 2023-06-01T01:02:03.826Z
//   },
//   {
//     _id: new ObjectId("6477ee0bc9ff9d73bd3a8e67"),
//     name: 'LaGuardia Airport',
//     location: 'New York City',
//     code: 'LGA',
//     __v: 0,
//     createdAt: 2023-06-01T01:02:03.827Z,
//     updatedAt: 2023-06-01T01:02:03.827Z
//   },
//   {
//     _id: new ObjectId("6477ee0bc9ff9d73bd3a8e68"),
//     name: 'John F Kennedy International Airport',
//     location: 'New York City',
//     code: 'JFK',
//     __v: 0,
//     createdAt: 2023-06-01T01:02:03.827Z,
//     updatedAt: 2023-06-01T01:02:03.827Z
//   },
//   {
//     _id: new ObjectId("6477ee0bc9ff9d73bd3a8e69"),
//     name: 'Los Angeles International Airport',
//     location: 'Los Angeles',
//     code: 'LAX',
//     __v: 0,
//     createdAt: 2023-06-01T01:02:03.827Z,
//     updatedAt: 2023-06-01T01:02:03.827Z
//   },
//   {
//     _id: new ObjectId("6477ee0bc9ff9d73bd3a8e6a"),
//     name: 'San Francisco Airport',
//     location: 'San Francisco',
//     code: 'SFO',
//     __v: 0,
//     createdAt: 2023-06-01T01:02:03.827Z,
//     updatedAt: 2023-06-01T01:02:03.827Z
//   },
//   {
//     _id: new ObjectId("6477ee0bc9ff9d73bd3a8e6b"),
//     name: 'Philadelphia International Airport',
//     location: 'Philadelphia',
//     code: 'PHL',
//     __v: 0,
//     createdAt: 2023-06-01T01:02:03.827Z,
//     updatedAt: 2023-06-01T01:02:03.827Z
//   }
// ]
// [
//   {
//     _id: new ObjectId("6477ee15374efba40af0c4c9"),
//     airline: 'United',
//     flightNumber: 74,
//     price: 120.2,
//     numberOfSeats: 2,
//     departingAirport: new ObjectId("6477ee0bc9ff9d73bd3a8e67"),
//     arrivalAirport: new ObjectId("6477ee0bc9ff9d73bd3a8e69"),
//     departureDateTime: 'June 6 @ 12:00 pm',
//     __v: 0,
//     createdAt: 2023-06-01T01:02:13.623Z,
//     updatedAt: 2023-06-01T01:02:13.623Z
//   },
//   {
//     _id: new ObjectId("6477ee15374efba40af0c4ca"),
//     airline: 'Southwest',
//     flightNumber: 34,
//     price: 35.4,
//     numberOfSeats: 1,
//     departingAirport: new ObjectId("6477ee0bc9ff9d73bd3a8e67"),
//     arrivalAirport: new ObjectId("6477ee0bc9ff9d73bd3a8e68"),
//     departureDateTime: 'June 12 @ 1:00 pm',
//     __v: 0,
//     createdAt: 2023-06-01T01:02:13.624Z,
//     updatedAt: 2023-06-01T01:02:13.624Z
//   },
//   {
//     _id: new ObjectId("6477ee15374efba40af0c4cb"),
//     airline: 'Frontier',
//     flightNumber: 100,
//     price: 89.3,
//     numberOfSeats: 1,
//     departingAirport: new ObjectId("6477ee0bc9ff9d73bd3a8e66"),
//     arrivalAirport: new ObjectId("6477ee0bc9ff9d73bd3a8e6b"),
//     departureDateTime: 'June 2 @ 11:00 pm',
//     __v: 0,
//     createdAt: 2023-06-01T01:02:13.624Z,
//     updatedAt: 2023-06-01T01:02:13.624Z
//   },
//   {
//     _id: new ObjectId("6477ee15374efba40af0c4cc"),
//     airline: 'United',
//     flightNumber: 89,
//     price: 110.4,
//     numberOfSeats: 1,
//     departingAirport: new ObjectId("6477ee0bc9ff9d73bd3a8e67"),
//     arrivalAirport: new ObjectId("6477ee0bc9ff9d73bd3a8e69"),
//     departureDateTime: 'July 6 @ 1:00 pm',
//     __v: 0,
//     createdAt: 2023-06-01T01:02:13.624Z,
//     updatedAt: 2023-06-01T01:02:13.624Z
//   },
//   {
//     _id: new ObjectId("6477ee15374efba40af0c4cd"),
//     airline: 'Delta',
//     flightNumber: 52,
//     price: 134.2,
//     numberOfSeats: 2,
//     departingAirport: new ObjectId("6477ee0bc9ff9d73bd3a8e67"),
//     arrivalAirport: new ObjectId("6477ee0bc9ff9d73bd3a8e69"),
//     departureDateTime: 'August 6 @ 12:00 pm',
//     __v: 0,
//     createdAt: 2023-06-01T01:02:13.624Z,
//     updatedAt: 2023-06-01T01:02:13.624Z
//   },
//   {
//     _id: new ObjectId("6477ee15374efba40af0c4ce"),
//     airline: 'Frontier',
//     flightNumber: 42,
//     price: 143.6,
//     numberOfSeats: 2,
//     departingAirport: new ObjectId("6477ee0bc9ff9d73bd3a8e6b"),
//     arrivalAirport: new ObjectId("6477ee0bc9ff9d73bd3a8e6a"),
//     departureDateTime: 'July 4 @ 3:00 pm',
//     __v: 0,
//     createdAt: 2023-06-01T01:02:13.624Z,
//     updatedAt: 2023-06-01T01:02:13.624Z
//   },
//   {
//     _id: new ObjectId("6477ee15374efba40af0c4cf"),
//     airline: 'American',
//     flightNumber: 243,
//     price: 224.8,
//     numberOfSeats: 1,
//     departingAirport: new ObjectId("6477ee0bc9ff9d73bd3a8e67"),
//     arrivalAirport: new ObjectId("6477ee0bc9ff9d73bd3a8e69"),
//     departureDateTime: 'July 2 @ 12:00 pm',
//     __v: 0,
//     createdAt: 2023-06-01T01:02:13.624Z,
//     updatedAt: 2023-06-01T01:02:13.624Z
//   },
//   {
//     _id: new ObjectId("6477ee15374efba40af0c4d0"),
//     airline: 'Frontier',
//     flightNumber: 325,
//     price: 124.8,
//     numberOfSeats: 2,
//     departingAirport: new ObjectId("6477ee0bc9ff9d73bd3a8e66"),
//     arrivalAirport: new ObjectId("6477ee0bc9ff9d73bd3a8e6a"),
//     departureDateTime: 'June 3 @ 2:00 pm',
//     __v: 0,
//     createdAt: 2023-06-01T01:02:13.624Z,
//     updatedAt: 2023-06-01T01:02:13.624Z
//   }
// ]


//USER STORY 2

const readAirports = async() => {
    const airports = await Airport.find()
    console.log(airports)
}

const readFlights = async() => {
   const flights = await Flight.find().populate('departingAirport').populate('arrivalAirport')
    console.log(flights)
}

// async function main () {
//     try{
//         await readAirports()
//         await readFlights()
//     } catch(error){
//         console.log(error)
//     } finally {
//         await db.close()
//     }
// }

// main()

// Console:
// Jeremys-MacBook-Pro-2:mongoose-flights jeremylemenager$ node query.js
// connected to mongodb
// [
//   {
//     _id: new ObjectId("6477ee0bc9ff9d73bd3a8e66"),
//     name: 'Logan Airport',
//     location: 'Boston',
//     code: 'LGN',
//     __v: 0,
//     createdAt: 2023-06-01T01:02:03.826Z,
//     updatedAt: 2023-06-01T01:02:03.826Z
//   },
//   {
//     _id: new ObjectId("6477ee0bc9ff9d73bd3a8e67"),
//     name: 'LaGuardia Airport',
//     location: 'New York City',
//     code: 'LGA',
//     __v: 0,
//     createdAt: 2023-06-01T01:02:03.827Z,
//     updatedAt: 2023-06-01T01:02:03.827Z
//   },
//   {
//     _id: new ObjectId("6477ee0bc9ff9d73bd3a8e68"),
//     name: 'John F Kennedy International Airport',
//     location: 'New York City',
//     code: 'JFK',
//     __v: 0,
//     createdAt: 2023-06-01T01:02:03.827Z,
//     updatedAt: 2023-06-01T01:02:03.827Z
//   },
//   {
//     _id: new ObjectId("6477ee0bc9ff9d73bd3a8e69"),
//     name: 'Los Angeles International Airport',
//     location: 'Los Angeles',
//     code: 'LAX',
//     __v: 0,
//     createdAt: 2023-06-01T01:02:03.827Z,
//     updatedAt: 2023-06-01T01:02:03.827Z
//   },
//   {
//     _id: new ObjectId("6477ee0bc9ff9d73bd3a8e6a"),
//     name: 'San Francisco Airport',
//     location: 'San Francisco',
//     code: 'SFO',
//     __v: 0,
//     createdAt: 2023-06-01T01:02:03.827Z,
//     updatedAt: 2023-06-01T01:02:03.827Z
//   },
//   {
//     _id: new ObjectId("6477ee0bc9ff9d73bd3a8e6b"),
//     name: 'Philadelphia International Airport',
//     location: 'Philadelphia',
//     code: 'PHL',
//     __v: 0,
//     createdAt: 2023-06-01T01:02:03.827Z,
//     updatedAt: 2023-06-01T01:02:03.827Z
//   }
// ]
// [
//   {
//     _id: new ObjectId("6477ee15374efba40af0c4c9"),
//     airline: 'United',
//     flightNumber: 74,
//     price: 120.2,
//     numberOfSeats: 2,
//     departingAirport: {
//       _id: new ObjectId("6477ee0bc9ff9d73bd3a8e67"),
//       name: 'LaGuardia Airport',
//       location: 'New York City',
//       code: 'LGA',
//       __v: 0,
//       createdAt: 2023-06-01T01:02:03.827Z,
//       updatedAt: 2023-06-01T01:02:03.827Z
//     },
//     arrivalAirport: {
//       _id: new ObjectId("6477ee0bc9ff9d73bd3a8e69"),
//       name: 'Los Angeles International Airport',
//       location: 'Los Angeles',
//       code: 'LAX',
//       __v: 0,
//       createdAt: 2023-06-01T01:02:03.827Z,
//       updatedAt: 2023-06-01T01:02:03.827Z
//     },
//     departureDateTime: 'June 6 @ 12:00 pm',
//     __v: 0,
//     createdAt: 2023-06-01T01:02:13.623Z,
//     updatedAt: 2023-06-01T01:02:13.623Z
//   },
//   {
//     _id: new ObjectId("6477ee15374efba40af0c4ca"),
//     airline: 'Southwest',
//     flightNumber: 34,
//     price: 35.4,
//     numberOfSeats: 1,
//     departingAirport: {
//       _id: new ObjectId("6477ee0bc9ff9d73bd3a8e67"),
//       name: 'LaGuardia Airport',
//       location: 'New York City',
//       code: 'LGA',
//       __v: 0,
//       createdAt: 2023-06-01T01:02:03.827Z,
//       updatedAt: 2023-06-01T01:02:03.827Z
//     },
//     arrivalAirport: {
//       _id: new ObjectId("6477ee0bc9ff9d73bd3a8e68"),
//       name: 'John F Kennedy International Airport',
//       location: 'New York City',
//       code: 'JFK',
//       __v: 0,
//       createdAt: 2023-06-01T01:02:03.827Z,
//       updatedAt: 2023-06-01T01:02:03.827Z
//     },
//     departureDateTime: 'June 12 @ 1:00 pm',
//     __v: 0,
//     createdAt: 2023-06-01T01:02:13.624Z,
//     updatedAt: 2023-06-01T01:02:13.624Z
//   },
//   {
//     _id: new ObjectId("6477ee15374efba40af0c4cb"),
//     airline: 'Frontier',
//     flightNumber: 100,
//     price: 89.3,
//     numberOfSeats: 1,
//     departingAirport: {
//       _id: new ObjectId("6477ee0bc9ff9d73bd3a8e66"),
//       name: 'Logan Airport',
//       location: 'Boston',
//       code: 'LGN',
//       __v: 0,
//       createdAt: 2023-06-01T01:02:03.826Z,
//       updatedAt: 2023-06-01T01:02:03.826Z
//     },
//     arrivalAirport: {
//       _id: new ObjectId("6477ee0bc9ff9d73bd3a8e6b"),
//       name: 'Philadelphia International Airport',
//       location: 'Philadelphia',
//       code: 'PHL',
//       __v: 0,
//       createdAt: 2023-06-01T01:02:03.827Z,
//       updatedAt: 2023-06-01T01:02:03.827Z
//     },
//     departureDateTime: 'June 2 @ 11:00 pm',
//     __v: 0,
//     createdAt: 2023-06-01T01:02:13.624Z,
//     updatedAt: 2023-06-01T01:02:13.624Z
//   },
//   {
//     _id: new ObjectId("6477ee15374efba40af0c4cc"),
//     airline: 'United',
//     flightNumber: 89,
//     price: 110.4,
//     numberOfSeats: 1,
//     departingAirport: {
//       _id: new ObjectId("6477ee0bc9ff9d73bd3a8e67"),
//       name: 'LaGuardia Airport',
//       location: 'New York City',
//       code: 'LGA',
//       __v: 0,
//       createdAt: 2023-06-01T01:02:03.827Z,
//       updatedAt: 2023-06-01T01:02:03.827Z
//     },
//     arrivalAirport: {
//       _id: new ObjectId("6477ee0bc9ff9d73bd3a8e69"),
//       name: 'Los Angeles International Airport',
//       location: 'Los Angeles',
//       code: 'LAX',
//       __v: 0,
//       createdAt: 2023-06-01T01:02:03.827Z,
//       updatedAt: 2023-06-01T01:02:03.827Z
//     },
//     departureDateTime: 'July 6 @ 1:00 pm',
//     __v: 0,
//     createdAt: 2023-06-01T01:02:13.624Z,
//     updatedAt: 2023-06-01T01:02:13.624Z
//   },
//   {
//     _id: new ObjectId("6477ee15374efba40af0c4cd"),
//     airline: 'Delta',
//     flightNumber: 52,
//     price: 134.2,
//     numberOfSeats: 2,
//     departingAirport: {
//       _id: new ObjectId("6477ee0bc9ff9d73bd3a8e67"),
//       name: 'LaGuardia Airport',
//       location: 'New York City',
//       code: 'LGA',
//       __v: 0,
//       createdAt: 2023-06-01T01:02:03.827Z,
//       updatedAt: 2023-06-01T01:02:03.827Z
//     },
//     arrivalAirport: {
//       _id: new ObjectId("6477ee0bc9ff9d73bd3a8e69"),
//       name: 'Los Angeles International Airport',
//       location: 'Los Angeles',
//       code: 'LAX',
//       __v: 0,
//       createdAt: 2023-06-01T01:02:03.827Z,
//       updatedAt: 2023-06-01T01:02:03.827Z
//     },
//     departureDateTime: 'August 6 @ 12:00 pm',
//     __v: 0,
//     createdAt: 2023-06-01T01:02:13.624Z,
//     updatedAt: 2023-06-01T01:02:13.624Z
//   },
//   {
//     _id: new ObjectId("6477ee15374efba40af0c4ce"),
//     airline: 'Frontier',
//     flightNumber: 42,
//     price: 143.6,
//     numberOfSeats: 2,
//     departingAirport: {
//       _id: new ObjectId("6477ee0bc9ff9d73bd3a8e6b"),
//       name: 'Philadelphia International Airport',
//       location: 'Philadelphia',
//       code: 'PHL',
//       __v: 0,
//       createdAt: 2023-06-01T01:02:03.827Z,
//       updatedAt: 2023-06-01T01:02:03.827Z
//     },
//     arrivalAirport: {
//       _id: new ObjectId("6477ee0bc9ff9d73bd3a8e6a"),
//       name: 'San Francisco Airport',
//       location: 'San Francisco',
//       code: 'SFO',
//       __v: 0,
//       createdAt: 2023-06-01T01:02:03.827Z,
//       updatedAt: 2023-06-01T01:02:03.827Z
//     },
//     departureDateTime: 'July 4 @ 3:00 pm',
//     __v: 0,
//     createdAt: 2023-06-01T01:02:13.624Z,
//     updatedAt: 2023-06-01T01:02:13.624Z
//   },
//   {
//     _id: new ObjectId("6477ee15374efba40af0c4cf"),
//     airline: 'American',
//     flightNumber: 243,
//     price: 224.8,
//     numberOfSeats: 1,
//     departingAirport: {
//       _id: new ObjectId("6477ee0bc9ff9d73bd3a8e67"),
//       name: 'LaGuardia Airport',
//       location: 'New York City',
//       code: 'LGA',
//       __v: 0,
//       createdAt: 2023-06-01T01:02:03.827Z,
//       updatedAt: 2023-06-01T01:02:03.827Z
//     },
//     arrivalAirport: {
//       _id: new ObjectId("6477ee0bc9ff9d73bd3a8e69"),
//       name: 'Los Angeles International Airport',
//       location: 'Los Angeles',
//       code: 'LAX',
//       __v: 0,
//       createdAt: 2023-06-01T01:02:03.827Z,
//       updatedAt: 2023-06-01T01:02:03.827Z
//     },
//     departureDateTime: 'July 2 @ 12:00 pm',
//     __v: 0,
//     createdAt: 2023-06-01T01:02:13.624Z,
//     updatedAt: 2023-06-01T01:02:13.624Z
//   },
//   {
//     _id: new ObjectId("6477ee15374efba40af0c4d0"),
//     airline: 'Frontier',
//     flightNumber: 325,
//     price: 124.8,
//     numberOfSeats: 2,
//     departingAirport: {
//       _id: new ObjectId("6477ee0bc9ff9d73bd3a8e66"),
//       name: 'Logan Airport',
//       location: 'Boston',
//       code: 'LGN',
//       __v: 0,
//       createdAt: 2023-06-01T01:02:03.826Z,
//       updatedAt: 2023-06-01T01:02:03.826Z
//     },
//     arrivalAirport: {
//       _id: new ObjectId("6477ee0bc9ff9d73bd3a8e6a"),
//       name: 'San Francisco Airport',
//       location: 'San Francisco',
//       code: 'SFO',
//       __v: 0,
//       createdAt: 2023-06-01T01:02:03.827Z,
//       updatedAt: 2023-06-01T01:02:03.827Z
//     },
//     departureDateTime: 'June 3 @ 2:00 pm',
//     __v: 0,
//     createdAt: 2023-06-01T01:02:13.624Z,
//     updatedAt: 2023-06-01T01:02:13.624Z
//   }
// ]


//USER STORY 3

const createFlight = async() => {
    const airport = await Airport.findOne()
    const flight = await Flight.create(
        {
            airline: 'Qantas',
            flightNumber:3,
            price: 504.3,
            numberOfSeats: 2,
            departingAirport: airport._id,
            arrivalAirport: airport._id,
            departureDateTime: 'September 7 11:00 pm'
        }
    )
    console.log(flight)
}

// async function main () {
//     try{
//         await createFlight()
//     } catch(error){
//         console.log(error)
//     } finally {
//         await db.close()
//     }
// }

// main()

// Console: 
// Jeremys-MacBook-Pro-2:mongoose-flights jeremylemenager$ node query.js
// connected to mongodb
// {
//   airline: 'Qantas',
//   flightNumber: 3,
//   price: 504.3,
//   numberOfSeats: 2,
//   departingAirport: new ObjectId("6477ee0bc9ff9d73bd3a8e66"),
//   arrivalAirport: new ObjectId("6477ee0bc9ff9d73bd3a8e66"),
//   departureDateTime: 'September 7 11:00 pm',
//   _id: new ObjectId("6477f443d9e33dadbbd5beeb"),
//   createdAt: 2023-06-01T01:28:35.146Z,
//   updatedAt: 2023-06-01T01:28:35.146Z,
//   __v: 0
// }


//USER STORY 4

const updateFlightDetails = async() =>{
    const updatedFlight = await Flight.updateOne({airline:'Delta'}, {departureDateTime: 'August 24 12:00pm'})
    console.log(updatedFlight)
}

// async function main () {
//     try{
//         await updateFlightDetails()
//     } catch(error){
//         console.log(error)
//     } finally {
//         await db.close()
//     }
// }

// main()

// Console:
// Jeremys-MacBook-Pro-2:mongoose-flights jeremylemenager$ node query.js
// connected to mongodb
// {
//   acknowledged: true,
//   modifiedCount: 1,
//   upsertedId: null,
//   upsertedCount: 0,
//   matchedCount: 1
// }


//USER STORY 5

const deleteFlight = async() => {
    const deletedFlight = await Flight.deleteOne({flightNumber: 100})
    console.log(deletedFlight)
}

async function main () {
    try{
        await deleteFlight()
    } catch(error){
        console.log(error)
    } finally {
        await db.close()
    }
}

main()

// Console:
// Jeremys-MacBook-Pro-2:mongoose-flights jeremylemenager$ node query.js
// connected to mongodb
// { acknowledged: true, deletedCount: 1 }