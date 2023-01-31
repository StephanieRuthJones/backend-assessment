// Description: This is the main entry point of the application
//Require the express module
const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
//Set the port to 3000
const port = 3000;

//connect to MongoDB database
connectDB();

//Create an express application
const app = express();

//Use express.json() to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Require routes from files
const characterRoutes = require("./routes/characterRoutes");
const favoritesRoutes = require("./routes/favoritesRoutes");
const userRoutes = require("./routes/userRoutes");
//Require error handling middleware
const { errorHandler } = require("./middleware/errorMiddleware");

//Use /characters as the base route for character routes

app.use("/api/characters", characterRoutes);
app.use("/api/favorites", favoritesRoutes);
app.use("/api/user", userRoutes);

//Set up error handling middleware
app.use(errorHandler);

//Set up server to listen on port 3000
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));

