const mongoose = require("mongoose");

const filmeSchema = new mongoose.Schema({
  adult: Boolean,
  backdrop_path: String,
  genre_ids: [Number],
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  original_language: String,
  original_title: String,
  overview: String,
  popularity: Number,
  poster_path: String,
  release_date: Date,
  title: {
    type: String,
    required: true,
  },
  video: Boolean,
  vote_average: Number,
  vote_count: Number,
  comments: {
    type: String,
    required: false,
  },
});

const Filme = mongoose.model("Filme", filmeSchema);

module.exports = Filme;
