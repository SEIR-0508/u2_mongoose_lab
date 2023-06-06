const db = require('../db')
const { Flight, Airport } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const airportJFK = await Airport.find({ code: 'JFK' })
  const airportLHR = await Airport.find({ code: 'LHR' })
  const airportDFW = await Airport.find({ code: 'DFW' })
  const airportMIA = await Airport.find({ code: 'MIA' })
  const airportLAX = await Airport.find({ code: 'LAX' })
  const airportHON = await Airport.find({ code: 'HON' }) 
  const airportIST = await Airport.find({ code: 'IST' })
  const airportATH = await Airport.find({ code: 'ATH' })
  const airportICN = await Airport.find({ code: 'ICN' })
  const airportPHX = await Airport.find({ code: 'PHX' })
  // console.log(await Airport.find({}))

  const flights = [
    {
      airline: 'Delta Airlines',
      flight_number: 2297,
      price: '$749.38',
      number_of_seats: 356,
      departing_airport: airportDFW[0]._id,
      arriving_airport: airportJFK[0]._id,
      departure_date_and_time: '07/03/2023 17:42',
    },
    {
      airline: 'American Airlines',
      flight_number: 72,
      price: '$1149.38',
      number_of_seats: 628,
      departing_airport: airportMIA[0]._id,
      arriving_airport: airportLHR[0]._id,
      departure_date_and_time: '10/03/2023 05:43',
    },
    {
      airline: 'Korean Air',
      flight_number: 137,
      price: '$2349.38',
      number_of_seats: 689,
      departing_airport: airportLAX[0]._id,
      arriving_airport: airportICN[0]._id,
      departure_date_and_time: '12/08/2023 13:05',
    },
    {
      airline: 'Turkish Airlines',
      flight_number: 777,
      price: '$149.38',
      number_of_seats: 186,
      departing_airport: airportATH[0]._id,
      arriving_airport: airportIST[0]._id,
      departure_date_and_time: '03/16/2023 21:23',
    },
    {
      airline: 'Hawaiian Airlines',
      flight_number: 610,
      price: '$1239.45',
      number_of_seats: 520,
      departing_airport: airportPHX[0]._id,
      arriving_airport: airportHON[0]._id,
      departure_date_and_time: '01/31/2023 23:56',
    }
  ]
  await Flight.deleteMany()

  await Flight.insertMany(flights)
  console.log('flights!')
}

const run = async () => {
  await main()
  db.close()
}

run()