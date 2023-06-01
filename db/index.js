const mongoose = require('mongoose');

mongoose
    .connect('mongodb://127.0.0.1:27017/flightsDatabase')
    .then(()=> {
        console.log('Connected to MongoDb!')
    })
    .catch((e) => {
        console.error('Connection error', e.message)
    })

mongoose.set('debug', true);

//mongoose gonnection is what mongoDB and port we are attached to
const db = mongoose.connection

//whenever we see the word 'db' it refers to our mongoose connection
module.exports = db