//Import asyncHandler so that we can use it in our routes to trigger error handling middleware
const asyncHandler = require("express-async-handler");
//Import Favorite model
const Favorite = require("../models/favoritesModel");

//@desc Get all favorites
//@route GET /favorites
//@access Private
const getFavorites = asyncHandler(async (req, res) => {
  const favorites = await Favorite.find({ user: req.user.id });
  res.json(favorites);
});

//@desc Add a new favorite
//@route POST /favorites
//@access Private
const addFavorite = asyncHandler(async (req, res) => {
  if (!req.body.name || !req.body.image || !req.body.description) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  const favorite = await Favorite.create({
    name: req.body.name,
    image: req.body.image,
    description: req.body.description,
    user: req.user.id,
  });

  res.status(200).json(favorite);
});

//@desc Update a favorite
//@route PUT /favorites/:id
//@access Private
const updateFavorite = asyncHandler(async (req, res) => {
  const favorite = await Favorite.findById(req.params.id);
  if (!favorite) {
    res.status(404);
    throw new Error("Favorite not found");
  }
  const updatedFavorite = await Favorite.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedFavorite);
});

//@desc Delete a favorite
//@route DELETE /favorites/:id
//@access Private
const deleteFavorite = asyncHandler(async (req, res) => {
  const favorite = await Favorite.findById(req.params.id);
  if (!favorite) {
    res.status(404);
    throw new Error("Favorite not found");
  }
  await favorite.remove();
  res.json({ message: `Favorite id ${req.params.id} was deleted` });
});

module.exports = { getFavorites, addFavorite, updateFavorite, deleteFavorite };
