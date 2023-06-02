const db = require(`./db`)
const { Flight, Airport } = require(`./models`)

const findFlights = async()=>{
    const flights = await Flight.find()
    console.log(`flights`, flights)
}

const findAirports = async()=>{
    const airports = await Airport.find()
    console.log(`airports`, airports)
}

const displayFlights = async()=>{
    const flights = await Flight.find()
    const airports = await Airport.find()
    const flightArr = []
    for (let i of flights){
        const dep = await Airport.findById(i.departingAirport)
        const arr = await Airport.findById(i.arrivalAirport)
        let flightInfo = {
            airline: i.airline,
            departing_airport: dep.code,
            arrival_airport: arr.code,
            flight_number: i.flight_number,
            departure_date_time: i.departure_date_time.toString()
        }
        flightArr.push(flightInfo)
    }
    console.log(flightArr)
}

const createFlight = async(airline, flight_number, departingAirport, arrivalAirport, departure_date_time)=>{
    const flightInfo = {
        airline: airline,
        flight_number: flight_number,
        departing_airport: departingAirport,
        arrival_airport: arrivalAirport,
        departure_date_time: departure_date_time
    }
    await Flight.insertOne({flightInfo})
}




const run = async()=>{
    try{
    // await findFlights()
    // await findAirports()
    await displayFlights()
    // await Flight.deleteMany()
    // await Airport.deleteMany()
    } catch(error){
        console.log(error)
    } finally{
        await db.close()
    }
}

run()