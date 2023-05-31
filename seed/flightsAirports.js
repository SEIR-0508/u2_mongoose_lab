const db = require('../db')
const { Flight, Airport } = require('../models')
const Chance = require('chance')

const chance = new Chance()

db.on('error', console.error.bind(console, 'MongoDB connection error:'))