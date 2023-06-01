const mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost/flightDB', )
.then(() => {
  console.log('Connected to database');
}).catch((error) => {
  console.error('Error connecting to database:', error);
});

module.exports = mongoose.connection;
