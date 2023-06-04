const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/flightDatabase')
.then(()=> {
    console.log('connected to MongoDb')
})
.catch((e) => {
    console.error('connection error', e.message)
})

mongoose.set('debug', true)

const db = mongoose.connection

module.exports = db