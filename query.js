const db = require(`./db`)
const { Flight, Airport } = require(`./models`)

const findFlights = async()=>{
    const flights = await Flight.find()
    .populate(`departingAirport`)
    .populate(`arrivalAirport`)
    console.log(`flights`, flights)
}

const findAirports = async()=>{
    const airports = await Airport.find()
    console.log(`airports`, airports)
}

const displayFlights = async()=>{
    const flights = await Flight.find()
    const airports = await Airport.find()
    for (let i of flights){
        console.log(i.airline)
        console.log(i.departingAirport)
    }
    
}

const run = async()=>{
    try{
        // await displayFlights()
        await findFlights()
        // await findAirports()
    } catch(error){
        console.log(error)
    } finally{
        await db.close()
    }
}

run()