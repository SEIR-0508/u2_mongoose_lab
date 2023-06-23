const db = require('./db')
const { Airport, Flight } = require('./models')

const getAllAirports = async(req, res) => {
    try {
        const airports = await Airport.find()
        return res.status(200).json({ airports })
    } catch(e){
        return res.status(500).send(e.message)
    }
}

const getAllFlights = async(req, res) => {
    try {
        const flights = await Flight.find()
        return res.status(200).json({ flights })
    } catch(e){
        return res.status(500).send(e.message)
    }
}

const createFlight = async(req, res) => {
    try{
        const flight = new Flight(req.body)
        await flight.save()
        return res.status(200).json({ flight })
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const updateFlight = async(req, res) => {
    try{
        const { id } = req.params
        const flight = await Flight.findByIdAndUpdate(id, req.body, {new: true})
        if (flight) {
            return res.status(200).json({flight})
        } else {
            return res.status(400).json({message: 'Flight does not exist.'})
        }
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const deleteFlight = async(req, res) => {
    try {
        const { id } = req.paramsconst 
        const flight = await Flight.findByIdAndDelete(id)
        if (flight) {
            return res.status(200).json({flight})
        } else {
            return res.status(400).json({message: 'Flight does not exist.'})
        }
    } catch (e) {
        res.status(500).send(e.message)
    }
}

async function main() {
  try {
      await getAllAirports()
      await getAllFlights()
      await createFlight()
      await updateFlight()
      await deleteFlight()
  } catch (error) {
      console.log(error)
  } finally {
      await db.close()
  }
}

main()