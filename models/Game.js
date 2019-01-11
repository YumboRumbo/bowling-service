import mongoose from "mongoose";

const Schema = mongoose.Schema;

const GameSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  author: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

const Game = mongoose.model("Game", GameSchema);

export default Game;