const db = require('../db')
const { Airport } = require('../models')

db.on('error', console.error.bind(console, 'MDB error!!'))

const main = async () => {
    const airports = [
        {
        name: 'Miami International Airport',
        location: '2100 NW 42nd Ave, Miami, FL 33142',
        code: '(MIA)'
        },
        {
        name: 'Los Angeles International Airport',
        location: '1 World Way, Los Angeles, CA 90045',
        code: '(LAX)'
        },
        {
        name: 'John F. Kennedy International Airport',
        location: 'Queens, NY 11430',
        code: '(JFK)'
        },
        {
        name: 'Boston Logan International Airport',
        location: 'One Harborside Dr Suite 200S, East Boston, MA 02128',
        code: '(BOS)'
        },
        {
        name: 'Denver International Airport',
        location: '8500 Peña Blvd, Denver, CO 80249',
        code: '(DEN)'
        }
    ]

    //Mongoose allows us to run Mongo Data through JS
    await Airport.insertMany(airports)
    console.log('created airports!')
}

const run = async () => {
    await main()
    db.close()
}


run()