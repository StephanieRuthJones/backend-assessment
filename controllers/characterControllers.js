//Require axios module
const axios = require("axios");
//Set base URL for API
const baseURL = "https://rickandmortyapi.com/api";

//@desc Get Rick and Morty characters
//@route GET /api/characters
//@access Public
const getCharacters = async (req, res) => {
  try {
    const response = await axios.get(`${baseURL}/character`);
    res.status(200).json(response.data.results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

//@desc Get Rick and Morty characters by ID
//@route GET /api/characters/:id
//@access Public
const getCharacterById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`${baseURL}/character/${id}`);
    const character = response.data;
    res.status(200).json(character);
  } catch (error) {
    console.log("error", error);
    const { status, statusText } = error.response;
    res.status(status).json({ message: statusText });
  }
};

const getCharactersByStatus = async (req, res) => {
  const { status } = req.params;
  try {
    const response = await axios.get(`${baseURL}/character?status=${status}`);
    console.log("response.data.results", response.data.results);
    const characters = response.data.results;
    const sortedCharacterNames = characters
      .map((character) => character.name)
      .sort();
    res.status(200).json(sortedCharacterNames);
  } catch (error) {
    console.error("error.request", error.response.data.error);
    const { status, data } = error.response;
    res.status(status).json({ message: data.error });
  }
};

//getCharactersByLocation
const getCharactersByLocation = async (req, res) => {
  const { location } = req.params;

  try {
    const response = await axios.get(`${baseURL}/location/?name=${location}`);
    const locations = response.data.results[0];
    const characterUrls = locations.residents;

    const characters = await Promise.all(
      characterUrls.map(async (characterUrl) => {
        const response = await axios.get(characterUrl);
        return response.data.name;
      })
    );
    res.status(200).json(characters);
  } catch (error) {
    console.log("error", error);
    const { status, statusText } = error.response;
    res.status(status).json({ message: statusText });
  }
};

module.exports = {
  getCharacters,
  getCharacterById,
  getCharactersByStatus,
  getCharactersByLocation,
};
