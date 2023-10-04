const db = require('./db')
const { Airport, Flight } = require('./models')

const findAll = async () => {
  await Airport.find()
  await Flight.find()
}

const findById = async () => {
  await Airport.find({id: ""})
  await Flight.find({id: ""})
}

const createFlights = async () => {
  await Flight.insertOne(
    {
      airline: "Added Airline",
      flightNumber: 8,
      price: 999.99,
      numberOfSeats: 25,
      departingAirport: ((Airport)._id),
      arrivalAirport: ((Airport)._id),
      departureDate: "10-29-2002",
    }
  )
}

const updateInfo = async () => {
  await Flight.updateOne({ airline: '2nd Airline' }, { $set: { airline: 'updated airline' }, $currentDate: { lastModified: true } } )
}

const deleteInfo = async () => {
  await Flight.deleteOne( {airline: "4th Airline"} )
  await Airport.deleteOne( {name: "Clarence Airport"} )
}

async function main() {
  try {
    await findAll()
    await findById()
    await createFlights()
    await updateInfo()
    await deleteInfo()
  }
  catch {
    console.log('error')
  }
}

// main()