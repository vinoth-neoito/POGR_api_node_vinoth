import { getGames, getUsersGames } from "../dataAccess/gameData.js";
import { getUserById } from "../dataAccess/userData.js";

class GameService {
	getGames = async () => {
    const game = await getGames();
    return game;
  };
  
  getUserGames = async (userId) => {
    const arg = {
      user:userId
    }
    const populateArgs = [];
    let user = await getUserById(userId)
    const game = await getUsersGames(arg, populateArgs);
    const result = {
      id: user._id,
      name: user.name,
      email: user.email,
      games:game
    }
    return result;
	};
}

export default GameService;
