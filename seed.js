const Airport = require('./models/airport');
const Flight = require('./models/flight');
const mongoose = require('mongoose');

// MongoDB connection
mongoose.connect('mongodb://localhost/flightDB', {
}).then(() => {
  console.log('Connected to the database');
  seedData();
}).catch((error) => {
  console.error('Error connecting to the database:', error);
});

// Seed data
async function seedData() {
  try {
    const airports = [
      { name: 'John F. Kennedy International Airport', location: 'New York City', code: 'JFK' },
      { name: 'Los Angeles International', location: 'Los Angeles', code: 'LAX' },
      { name: 'Seattle-Tacoma International', location: 'Seattle', code: 'SEA' },
      { name: 'Colorado Springs Airport', location: 'Colorado', code: 'COS' }
    ];

    const flights = [
      {
        airline: 'American Blue',
        flightNumber: 101,
        price: 200,
        numberOfSeats: 100,
        departingAirport: 'JFK',
        arrivalAirport: 'SEA', 
        departureDateTime: new Date('2023-06-01T10:00:00')
      },
      {
        airline: 'Alaska Blue',
        flightNumber: 202,
        price: 300,
        numberOfSeats: 150,
        departingAirport: 'LAX',
        arrivalAirport: 'SEA',
        departureDateTime: new Date('2023-06-02T14:30:00')
      },
      {
        airline: 'Delta Airlines',
        flightNumber: 303,
        price: 300,
        numberOfSeats: 180,
        departingAirport: 'SEA',
        arrivalAirport: 'LAX',
        departureDateTime: new Date('2023-06-03T12:45:00')
      },
      {
        airline: 'Southwest Airlines',
        flightNumber: 404,
        price: 200,
        numberOfSeats: 120,
        departingAirport: 'JFK',
        arrivalAirport: 'COS',
        departureDateTime: new Date('2023-06-04T09:30:00')
      },
      {
        airline: 'United Airlines',
        flightNumber: 505,
        price: 250,
        numberOfSeats: 150,
        departingAirport: 'COS',
        arrivalAirport: 'SEA',
        departureDateTime: new Date('2023-06-05T16:15:00')
      },
      {
        airline: 'JetBlue Airways',
        flightNumber: 606,
        price: 180,
        numberOfSeats: 100,
        departingAirport: 'SEA',
        arrivalAirport: 'JFK',
        departureDateTime: new Date('2023-06-06T11:30:00')
      },
      {
        airline: 'Frontier Airlines',
        flightNumber: 707,
        price: 220,
        numberOfSeats: 140,
        departingAirport: 'LAX',
        arrivalAirport: 'JFK',
        departureDateTime: new Date('2023-06-07T15:45:00')
      }
    ];

    const createdAirports = await Airport.create(airports);
    console.log('Airports created:', createdAirports);

    for (let i = 0; i < flights.length; i++) {
      flights[i].departingAirport = createdAirports[i % airports.length]._id;
      flights[i].arrivalAirport = createdAirports[(i + 1) % airports.length]._id;
    }

    const createdFlights = await Flight.create(flights);
    console.log('Flights created:', createdFlights);
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    mongoose.disconnect();
    console.log('Disconnected from the database');
  }
}
