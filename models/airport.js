const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const airportSchema =  new Schema(
    {
      name: {type: String, required: true},
      location: {type: String, required: true, default: 'unknown'},
      code: {type: String, required: true}
    },
    {timestamps: true}
)

const Airport = mongoose.model('Airport', airportSchema)

module.exports = Airport