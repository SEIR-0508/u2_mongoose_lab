const db = require('./db')
const { Airport } = require('./models')



  const findAirport = async () => { 
    const airports = await Airport.find() 
    console.log(airports) 
}

async function main() {
    try {
        await findAirport();
    } catch (error) {
      console.log(error)
    } finally {
      await db.close()
    }
  }
  
  main()