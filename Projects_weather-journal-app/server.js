// Setup empty JS object to act as endpoint for all routes
projectData = {};
const port = 4000;
// Require Express to run server and routes
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// Start up an instance of app
const app = express()
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors())
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const server = app.listen(port, listening);
function listening(){
    console.log(`running on localhost: ${port}`);
};

// myAPI-key -- save for later use -- 72cc9dda5a82dad2bfe69f105910248e
// ctrl c -> stop the server

app.get("/userTemp", (request, response)=> {
    response.send(projectData)
})

app.post("/dataSave",(request, response)=>{
    projectData.date = request.body.date
    projectData.temp = request.body.temp
    projectData.content = request.body.content
    response.send()
})

// totalData -> has all the 3 info in it