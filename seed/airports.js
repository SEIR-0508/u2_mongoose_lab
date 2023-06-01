const db = require('../db')
const { Airport, Flight } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () =>
{
    const airports =[
    {
        name: 'Flying Machines R Us',
        location: 'Indianapolis',
        code: 'FMRU352'
    },
    {   
        name: 'Fly Safe',
        location: 'Canada',
        code: 'FSC123'
    },
    {        
        name: 'Definitely Not Falling',
        location: 'Florida',
        code: 'DNF234'
    },
    {        
        name: 'Fly Away',
        location: 'Texas',
        code: 'FA123'
    },
    {      
          name: 'Airport Numba One',
        location: 'China',
        code: 'ANU5'
    },
    {       
         name: 'We Flyin Boys',
        location: 'North Carolina',
        code: 'WFB12'
    },
    {       
         name: 'Potato Flight',
        location: 'Idaho',
        code: 'PFI'
    },
    {        
        name: 'Splice Bad Idea',
        location: 'Class',
        code: 'HALP'
    }
]

await Airport.insertMany(airports)

}

const run = async () => {
    await main()
    db.close()
}

run()

