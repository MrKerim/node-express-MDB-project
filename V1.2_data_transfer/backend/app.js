const cors = require("cors");
const express = require("express");
const bodyParser = require('body-parser');

const fs = require("fs");


const app = express();
const port = 3000;

app.use(bodyParser.json());


app.use(cors());


let message = {};

app.get("/getData", (req, res) => {
    console.log("Data Requested...");

    fs.readFile('data.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log("Sending : "+ data);
        message.message = data;
        res.json(message);  
    });
});

app.post("/sendData", (req, res) => {
    console.log("Data Received...");
    const data = req.body;
    console.log(data);

    fs.writeFile('data.txt', data.message , (err) => {
        if (err) throw err;
        console.log('The data has been saved!');
        
        res.json({ message: "Data Received Successfully" });
    });
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
