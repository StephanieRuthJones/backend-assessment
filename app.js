// Description: This is the main entry point of the application
//Require the express module
const express = require("express");

//Create an express application
const app = express();

//Set the port to 3000
const port = 3000;

//Use express.json() to parse JSON bodies
app.use(express.json());

//Require routes from files
const definitionRoutes = require("./routes/definitionRoutes");
const characterRoutes = require("./routes/characterRoutes");

//Use /definitions as the base route for definition routes
app.use("/definitions", definitionRoutes);

//Use /api as the base route for character routes
app.use("/api", characterRoutes);

//Set up server to listen on port 3000
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
