const express = require('express')
const db = require('./db')
const query = require('./query')



const PORT = process.env.PORT || 3001

const app = express()

app.listen(PORT, () => {console.log(`Listening on port: ${PORT}`)})
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    console.log('express is working')

    res.send('This is the root')
})

app.get('/flight', query.getAllFlights)
app.get('/flight/:id', query.getFlightById)
app.post('/flight', query.createFlight)
app.put('/flight/:id', query.updateFlight)
app.delete('/flight/:id', query.deleteFlight)