//Import asyncHandler so that we can use it in our routes to trigger error handling middleware
const asyncHandler = require("express-async-handler");
//Import Favorite model
const Favorite = require("../models/favoritesModel");

//@desc Get all favorites
//@route GET /favorites
//@access Private
const getFavorites = asyncHandler(async (req, res) => {
  const favorites = await Favorite.find();
  res.json(favorites);
});

//@desc Add a new favorite
//@route POST /favorites
//@access Private
const addFavorite = asyncHandler(async (req, res) => {
  if (!req.body.name || !req.body.description || !req.body.image) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  const favorite = new Favorite({
    name: req.body.name,
    description: req.body.description,
    image: req.body.image,
  });
  const newFavorite = await favorite.save();
  res.status(201).json(newFavorite);

  //   if (!req.body.name || !req.body.description || !req.body.image) {
  //     return res.status(400).json({ message: "Missing required fields" });
  //   }
  //   const favorite = new Favorite({
  //     name: req.body.name,
  //     description: req.body.description,
  //     image: req.body.image,
  //   });
  //   try {
  //     const newFavorite = await favorite.save();
  //     res.status(201).json(newFavorite);
  //   } catch (err) {
  //     res.status(400).json({ message: err.message });
  //   }
});

//@desc Update a favorite
//@route PUT /favorites/:id
//@access Private
const updateFavorite = asyncHandler(async (req, res) => {
  if (!req.body.name || !req.body.description || !req.body.image) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  const favorite = await Favorite.findById(req.params.id);
  if (favorite == null) {
    return res.status(404).json({ message: "Favorite not found" });
  }
  favorite.name = req.body.name;
  favorite.description = req.body.description;
  favorite.image = req.body.image;

  const updatedFavorite = await favorite.save();
  res.json(updatedFavorite);

  //   try {
  //     const favorite = await Favorite.findById(req.params.id);
  //     if (favorite == null) {
  //       return res.status(404).json({ message: "Favorite not found" });
  //     }
  //     if (req.body.name != null) {
  //       favorite.name = req.body.name;
  //     }
  //     if (req.body.description != null) {
  //       favorite.description = req.body.description;
  //     }
  //     if (req.body.image != null) {
  //       favorite.image = req.body.image;
  //     }
  //     const updatedFavorite = await favorite.save();
  //     res.json(updatedFavorite);
  //   } catch (err) {
  //     res.status(500).json({ message: err.message });
  //   }
});

//@desc Delete a favorite
//@route DELETE /favorites/:id
//@access Private
const deleteFavorite = asyncHandler(async (req, res) => {
  res.json({ message: "Delete a favorite" });
  //   try {
  //     const favorite = await Favorite.findById(req.params.id);
  //     if (favorite == null) {
  //       return res.status(404).json({ message: "Favorite not found" });
  //     }
  //     await favorite.remove();
  //     res.json({ message: "Favorite deleted" });
  //   } catch (err) {
  //     res.status(500).json({ message: err.message });
  //   }
});

module.exports = { getFavorites, addFavorite, updateFavorite, deleteFavorite };
