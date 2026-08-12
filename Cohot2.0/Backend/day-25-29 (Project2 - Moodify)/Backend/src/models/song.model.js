const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
    unique: true,
  },
  posterUrl: {
    type: String,
    required: true,
    unique: true,
  },
  mood: {
    type: String,
    enum: {
      values: ["sad", "surprised", "happy"],
      message: "Mood must be sad, surprised, or happy",
    },
  },
});

const songModel = mongoose.model("songs", songSchema);

module.exports = songModel;
