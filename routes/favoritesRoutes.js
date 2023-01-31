//Import controllers
const {
  getFavorites,
  addFavorite,
  updateFavorite,
  deleteFavorite,
} = require("../controllers/favoritesControllers");
//Require express
const express = require("express");

//Create a router
const router = express.Router();

//GET Favorites
router.get("/", getFavorites);

//POST A new favorite
router.post("/", addFavorite);
//UPDATE A favorite
router.put("/:id", updateFavorite);

//DELETE A favorite
router.delete("/:id", deleteFavorite);

module.exports = router;
