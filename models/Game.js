import mongoose from "mongoose";

const Schema = mongoose.Schema;

const GameSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  creator: {
    type: String,
    required: true
  },
  rollScores: {
    type: [[Number]],
    required: true,
  },
  currentFrame: {
    type: Number,
    required: true,
  },
  frameScores: {
    type: [Number],
    required: true,
  },
  gameOver: {
    type: Boolean,
    required: true,
  },
});

const Game = mongoose.model("Game", GameSchema);

export default Game;