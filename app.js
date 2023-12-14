const express = require('express');
const  eventController = require('./controllers/eventController')

const app = express();
const PORT = 8080;

app.use(express.json());

app.get('/event',eventController.getEvent)

app.post('/alert/:alertId',eventController.addEvent)

app.listen(PORT,()=>console.log(`Server started on port ${PORT}...`))

