const db = require('./db')
const { Airport, Flight } = require('./models')

async function main() {
    try {
        await findAll()
        await findFlight()
        await findAirport()
        await createFlight()
        await createAirport()
        await updateFlight()
        await updateAirport()
        await deleteFlight()
        await deleteAirport()
    } catch (error) {
        console.log(error)
    } finally {
        await db.close()
    }
}

const findAll = async () => {
    const flights = await Flight.find()
    console.log(flights)
}

const findFlight = async () => {
    const flight = await Flight.findOne()
    console.log(flight)
}

const findAirport = async () => {
    const airport = await Airport.findOne()
    console.log(airport)
}

const createFlight = async () => {
    const chosenAirport = await Airport.find()
    let newFlight = await Flight.create({
        airline: 'United Airlines',
        flightNumber: 278,
        price: 78.50,
        numberOfSeats: 98,
        departingAirport: chosenAirport[2]._id,
        arrivalAirport: chosenAirport[1]._id,
        departureDateTime: new Date()
    })
    console.log(newFlight)
}

const createAirport = async () => {
    let newAirport = await Airport.create({
        name: 'Miami International Airport',
        location: 'Miami, Florida',
        code: 'MIA'
    })
    console.log(newAirport)
}

const updateFlight = async () => {
    const updated = await Flight.updateOne({
        price: 160
    }, {numberOfSeats: 86})
    console.log(updated)
}

const updateAirport = async () => {
    const updatedAirport = await Airport.updateOne({
        name: 'Denver International Airport' 
    }, {code: "DIA"})
    console.log(updatedAirport)
}

const deleteFlight = async () => {
    let deletedFlight = await Flight.deleteOne({
        flightNumber: 354
    })
    console.log(deletedFlight)
}

const deleteAirport = async () => {
    let deletedAirport = await Airport.deleteOne({
        code: "PIT"
    })
    console.log(deletedAirport)
}

main()