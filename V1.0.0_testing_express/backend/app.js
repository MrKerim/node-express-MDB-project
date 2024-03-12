
// cors is used for cross platform enabling when it is not used we get an error about requesting
// from different port or st... and give a 404 error
const cors = require("cors");

// express is used for creating a server
const express  = require("express");

// body-parser is used for parsing the body of the request
// in the part where we have a post req
const bodyParser = require('body-parser');

// create an instance of express as app
const app = express();

// use the body parser to parse the body of the request
app.use(bodyParser.json());
// use cors to enable cross platform requests
app.use(cors());
const port = 3000;


// dummy user data
user = {
    name: "Kerim",
    age: 21,
    occupation: "Developer",
};


// when we get an GET request at the "http://localhost:${port}/user" 
//we use get the send the user data as response
app.get("/user", (req, res) => {
    console.log("sending the data to the client...");

    //res.json sends the object (user) as a json to the client
    res.json(user);
});


// when we get an POST request at the "http://localhost:${port}/submituser"
// we use post to get the user data from the client and send a response as well
app.post('/submituser', (req, res) => {
    // Access the user data sent from the frontend
    const userData = req.body;

    // Process the user data (e.g., save it to a database)
    console.log('Received user data:', userData);

    // Respond with a success message
    res.json({ message: 'User data received successfully' });
});


// listen to the port 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});