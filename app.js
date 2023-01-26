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
const characterRoutes = require("./routes/characterRoutes");

//Require error handling middleware
const errorHandler = require("./middleware/errorHandler");

//Use /characters as the base route for character routes
app.use("/characters", characterRoutes);

//Set up error handling middleware
app.use(errorHandler);

//Set up server to listen on port 3000
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
