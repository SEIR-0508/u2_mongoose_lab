const db = require('./db')
const { Flight, Airport } = require('./models')

//findFlightsAndAirports

const findFlightsAndAirports = async() => {
    const airports = await Airport.find({}, {name: 1, location: 1, code: 1})
    const flights = await Flight.find({}, {airline: 1, flight_number: 1, departure_date_time: 1})
    .populate({
        path: 'departingAirport',
        select: 'code',
        model: 'Airport',
    })
    await console.log(airports)
    await console.log(flights)
}

//show Flight details based on chosen Object ID

const showDetails = async () => {
    try {
        const flightIds = await Flight.find({}, {_id: 1})
        console.log(flightIds)
        //input ID of flight...
        const flightId = "6477a9aebbed979dbefc5ded"
        const flightDetails = await Flight.find({_id: '6477a9aebbed979dbefc5ded'})
        .populate({
            path: 'departingAirport',
            select: 'code',
            model: 'Airport',
        })
        .populate({
            path: 'arrivalAirport',
            select: 'code',
            model: 'Airport',
        })
        console.log(flightDetails)
    } catch(error) {
        console.error('Error retrieving flight details:', error)
    } 
}

//showDetails()

//Create Flight

const createFlight = async() => {
    //see list of airports
    const airports = await Airport.find({})
    //input object required key pairs based on flight.js
    let flight = await Flight.create(
        {

        }
    )
    console.log(flight)
}

//Update Flights

const updateFlight = async() => {
    //input value to update.. i.e: ({airline: 'United'})
    //set new value to update.. i.e: ,({airline: 'United'}, {$set: {airline: 'American'}})
    const updatedFlight = await Flight.updateOne(
        {

        }
    )
    console.log(updatedFlight)
}

//Update Airports

const updateAirport = async() => {
    //input value to update.. i.e: ({name: 'Dulles International'})
    //set new value to update.. i.e: ,({name: 'Dulles International'}, {$set: {name: 'Dulles International Airport'}})
    const updatedAirport = await Airport.updateOne(
        {

        }
    )
    console.log(updatedAirport)
}


//Delete Flight

const deleteFlight = async () => {
    //Input an identifying value for the flight you want to delete.. i.e: ({airline: 'Jet Blue'})
    let deletedFlight = await Flight.deleteOne({})
    console.log(deletedFlight)
}


//Delete Airport

const deleteAirport = async () => {
    //Input an identifying value for the airport you want to delete.. i.e: ({name: 'Dulles International'})

    let deletedFlight = await Flight.deleteOne({})
    console.log(deletedFlight)
} 
