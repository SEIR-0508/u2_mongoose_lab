const  Flight  = require('./models/flight')

const getAllFlights = async (req, res) => {
    try{
        const flights = await Flight.find()
        return res.status(200).json({flights})
     } catch (error) {
       return res.status(500).send(error.message)
    }
}

const getFlightById = async (req, res) => {
    try{
  const { id } = req.params
  const flight = await Flight.findById(id)
  
    if(flight){
        return res.status(200).json({ flight })
    }
    return res.status(404).send('flight with the specified Id does not exist')
} catch{
    return res.status(500).send(error.message)
}
}

const createFlight = async (req, res) => {
    try{
        const flight = await new Flight(req.body)
        await flight.save()
        return res.status(201).json({flight})
    } catch (error) {
        return res.status(500).json({ error: error.message})
    }
}

const updateFlight = async (req, res) => {
    try{
        let { id } = req.params
        let flight = await Flight.findByIdAndUpdate(id, res.body, { new: true })
        if (flight) {
            return res.status(200).json(plant)
        }
         throw new Error('Flight not found')
    } catch (error){
       return res.status(500).send(error.message)
    }
}

const deleteFlight = async (req, res) => {
    try{
        const { id } = req.params
        const deleted = await Flight.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Flight deleted')
        }
        throw new Error('Flight not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


module.exports = {
    getAllFlights,
    getFlightById,
    createFlight,
    updateFlight,
    deleteFlight
}