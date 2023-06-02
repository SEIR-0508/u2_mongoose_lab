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


//USER STORY 2

const readAirports = async() => {
    const airports = await Airport.find()
    console.log(airports)
}

const readFlights = async() => {
   const flights = await Flight.find().populate('departingAirport').populate('arrivalAirport')
    console.log(flights)
}


//USER STORY 3

const createFlight = async(airlineName,airlineNumber,airlinePrice,airlineSeats, departingAirport, arrivalAirport, airlineDeparture) => {
    const airport = await Airport.findOne({name: departingAirport})
    const airport2 = await Airport.findOne({name: arrivalAirport})
    const flight = await Flight.create(
        {
            airline: airlineName,
            flightNumber: airlineNumber,
            price: airlinePrice,
            numberOfSeats: airlineSeats,
            departingAirport: airport._id,
            arrivalAirport: airport2._id,
            departureDateTime: airlineDeparture
        }
    )
    console.log(flight)
}


//USER STORY 4

const updateFlightDetails = async(targetFlightNumber, newAirline, newPrice, newDeparture) =>{
    const updatedFlight = await Flight.updateOne({flightNumber: targetFlightNumber}, {airline: newAirline, price: newPrice, departureDateTime: newDeparture})
    console.log(updatedFlight)
}

//USER STORY 5

const deleteFlight = async(flightNum) => { 
    const deletedFlight = await Flight.deleteOne({flightNumber: flightNum})
    console.log('Deleted Flight: ' + deletedFlight)
}

const deleteAirport = async(airport) => {
    const deletedAirport = await Airport.deleteOne({name: airport})
    console.log('Deleted Airport: ' + deletedAirport)
}

async function main () {
    try{
        //await readAirports()
        //await readFlights()
        //await createFlight()
        //await updateFlightDetails()
        await deleteFlight()
        await deleteAirport()
        //insert custom arguments for createFlight and below
    } catch(error){
        console.log(error)
    } finally {
        await db.close()
    }
}

main()