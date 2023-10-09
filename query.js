// Implement the following User Stories:

const db = require('./db')
const { Flight, Airport } = require('./models')

// As A User (AAU), I want to view a list of all Flights and airports (index functionality) that displays each Flight's airline, airport, Flight no., and departure date/time (consider formatting the departs property).
const findFlight = async () => {
  const Flights = await Flight.find()
  console.log(Flights)
}

// AAU, I want to be able to access the details for each of these objects via a Show route based on the object's ID
const ShowRoute = async (ObjectId) => {
    const flight = await Flight.findById("651e3a687bb7855443368a26")
      console.log('Flight found:', flight)
}

// AAU, I want to create Flights by entering the information for Airports and Flights using a Query.js file that you will create
const createFlight = async () => {
  const airport = await Airport.findOne()

  const flight = await Flight.create({
    airline: 'Jet Blue',
    flightNumber: 123,
    price: 500.0,
    numberOfSeats: 150,
    departingAirport: airport._id,
    arrivalAirport: airport._id,
    departureDateTime: new Date()
  })

  console.log('Created Flight:', flight);
}

// AAU, I want to be able to update the details for my Flights and Airports
const createAirport = async () => {
  const airport = await Airport.create({
    name: 'Boston Logon',
    location: 'Boston',
    code: '12345'
  })

  console.log('Created Airport:', airport);
}

const updateFlight = async () => {
  const filter = { airline: 'Jet Blue' };
  const update = { $set: { price: 600.0 } };

  const flight = await Flight.findOneAndUpdate(filter, update);

  if (flight) {
    console.log('Flight updated successfully');
  } else {
    console.log('Flight not found');
  }
}


// AAU, I want to be able to delete any Flight and Airport
const deleteFlight = async () => {
  const deleted = await Flight.deleteOne({ airline: 'Jet Blue' });
  console.log('Deleted Flight:', deleted)
}

const deleteAirport = async () => {
  const deleted = await Airport.deleteOne({ name: 'Boston Logon' });
  console.log('Deleted Airport:', deleted)
}

async function main() {
  try {
      // await findFlight() //working
      // await ShowRoute() //working
      await createFlight() //working
      await updateFlight() //working
      // await deleteFlight() //working
  } catch (error) {
      console.log(error)
  } finally {
      await db.close()
  }
}

main()

// node query.js  to run
// All min functions working
