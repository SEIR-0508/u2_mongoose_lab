const db = require(`../db`)
const Chance = require(`chance`)
const { Airport } = require(`../models`)

const chance = new Chance()

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

async function main() {
    const airports = [
        {
            name: chance.first() + ` Airport`,
            location: chance.city(),
            code: chance.integer({ min: 1000, max: 9999})
        },
        {
            name: chance.first() + ` Airport`,
            location: chance.city(),
            code: chance.integer({ min: 1000, max: 9999})
        },
        {
            name: chance.first() + ` Airport`,
            location: chance.city(),
            code: chance.integer({ min: 1000, max: 9999})
        },
        {
            name: chance.first() + ` Airport`,
            location: chance.city(),
            code: chance.integer({ min: 1000, max: 9999})
        }
    ]
    await Airport.insertMany(airports)
    console.log(`Created Airports`)
}

async function run() {
    await main()
    db.close()
}

run()