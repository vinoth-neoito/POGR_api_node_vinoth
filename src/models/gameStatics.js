import mongoose, { Schema } from "mongoose";
const gameStatics = new mongoose.Schema({
  gameMeta: {
    type: Object,
    default: [],
  },
 
	game: {
		type: Schema.Types.ObjectId,
		ref: "Game",
  },
	date: {
		type: Date,
		default: Date.now,
	}
});
const GameStatics = mongoose.model("GameStatics", gameStatics);
export default GameStatics;

