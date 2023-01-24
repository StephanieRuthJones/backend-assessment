// Description: This is the main entry point of the application
//Require the express module
const express = require("express");

//Create an express application
const app = express();

//Set the port to 3000
const port = 3000;

//Use express.json() to parse JSON bodies
app.use(express.json());

//GET route for the root of the API
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Rick and Morty API!" });
});

//Require routes from files

//Use /definitions as the base route for definition routes

//Use /api as the base route for character routes

//Set up server to listen on port 3000
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
