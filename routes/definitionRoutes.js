//Require the express module
const express = require("express");

//Create a router
const router = express.Router();

//GET /route
router.get("/route", (req, res) => {
  res.status(200).json({
    message:
      "A route in an express node app is a way of defining how an application responds to a client request to a particular endpoint, or URL. Routes are used to define how the application will handle HTTP methods such as GET, POST, PUT, PATCH, and DELETE. Each route can have different functionality associated with it, such as returning data from a database, or rendering a page.",
  });
});

//GET /controller
router.get("/controller", (req, res) => {
  res.status(200).json({
    message:
      "A controller in an express app is a layer of code that handles the logic of a user's interactions with a web application. It is responsible for taking in requests and sending out responses to the user. The controller is also responsible for calling models and passing data from them to the view layer.",
  });
});

//GET /root
router.get("/root", (req, res) => {
  res.status(200).json({
    message: "app.js",
  });
});

module.exports = router;
