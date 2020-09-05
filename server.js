// Setup empty JS object to act as endpoint for all routes
projectData = {};
// projectData = {name:'saqer',age:'2050'};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

const port = 3000;

// Setup Server
app.listen(port, listening)

// Callback to debug
function listening() {
    console.log(`running on localhost: ${port}`);
};

// Initialize all route with a callback function
app.get('/all', sendData);

// Callback function to complete GET '/all'
function sendData(request, response) {
    response.send(projectData);
};

// POST route
app.post('/saveRecord', callBack);
// app.get('/saveRecord', callBack);

function callBack(request, response) {
    console.log(request.body)
    newRecord = {
        temp: request.body.temp,
        date: request.body.date,
        userResponse: request.body.userResponse,
    }
    projectData.push(newRecord);
    response.send(projectData);
    console.log(projectData);
}