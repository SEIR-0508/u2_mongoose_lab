const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/mongoose_lab')
    .then(() => {
        console.log('Successfully connected to MongoDB')
    })
    .catch((e) => {
        console.log('Error', e.messsage)
    })

// mongoose.set('debug', true)

const db = mongoose.connection

module.exports = db