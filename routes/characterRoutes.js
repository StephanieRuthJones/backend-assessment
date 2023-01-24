//Require express
const express = require("express");

//Create a router
const router = express.Router();
//Require the character controller(s)
const {
  getCharacters,
  getCharacterById,
  getAliveCharacters,
} = require("../controllers/characterControllers");

//GET /api/characters - Get all Rick and Morty characters
router.get("/characters", getCharacters);

//GET /api/characters/:id - Get a single Rick and Morty character by ID
router.get("/characters/:id", getCharacterById);

//GET /api/characters/alive - Get all Rick and Morty characters who are alive
router.get("/characters/status/:status", getAliveCharacters);

//Export the router
module.exports = router;
