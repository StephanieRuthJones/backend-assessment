const mongoose = require("mongoose");

const favoriteSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
});

const Favorite = mongoose.model("Favorite", favoriteSchema);

module.exports = Favorite;
