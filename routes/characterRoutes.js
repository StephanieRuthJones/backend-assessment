//Require express
const express = require("express");

//Create a router
const router = express.Router();
//Require the character controller(s)
const {
  getCharacters,
  getCharacterById,
  getCharactersByStatus,
  getCharactersByLocation,
} = require("../controllers/characterController");

//GET /characters - Get all Rick and Morty characters
router.get("/", getCharacters);

//GET /characters/:id - Get a single Rick and Morty character by ID
router.get("/:id", getCharacterById);

//GET /characters/:status - Get Rick and Morty characters who are alive or dead based on status param
router.get("/status/:status", getCharactersByStatus);

//GET /characters/location/:location - Get all Rick and Morty characters who reside in a particular location
router.get("/location/:location", getCharactersByLocation);

//Export the router
module.exports = router;

