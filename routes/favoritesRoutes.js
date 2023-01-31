//Import controllers
const {
  getFavorites,
  addFavorite,
  updateFavorite,
  deleteFavorite,
} = require("../controllers/favoritesController");

//Import protect middleware
const { protect } = require("../middleware/authMiddleware");
//Require express
const express = require("express");

//Create a router
const router = express.Router();

//GET/POST Favorites
router.route("/").get(protect, getFavorites).post(protect, addFavorite);
//UPDATE/DELETE A favorite
router
  .route("/:id")
  .put(protect, updateFavorite)
  .delete(protect, deleteFavorite);

module.exports = router;
