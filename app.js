const express = require('express');
const  eventController = require('./controllers/eventController')
// const cors = require('cors');

const app = express();
const PORT = 8080;

app.use(express.json());
// app.use(cors());

app.get('/event',eventController.getEvent)

app.listen(PORT,()=>console.log(`Server started on port ${PORT}...`))

