const mongoose = require('mongoose')

mongoose
  .connect('mongodb://127.0.0.1:27017/flightsDatabase')
  .then(() => {
    console.log('Successfully connected to MongoDB.')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })
// mongoose.set('debug', true) - used to log all MongoDB queries to the console. Useful but can casue clutter, uncomment only when needed.
const db = mongoose.connection

module.exports = db // Using db limits the exported value to just the connection methods and properties. If the entire "mongoose" object is exported, instead of just the "mongoose.connection", any module that imports this connection module access to all the properties and methods that mongoose has.