import { getGames, getUsersGames } from "../dataAccess/gameData.js";
import { getGameMatchDetail } from "../dataAccess/gameMatchDetailsData.js";
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
  getUserGameProfile = async (userId, gameId) => {
    const arg = {
      user:userId
    }
    const populateArgs = ['user','game','gameMatch'];
    //let user = await getUserById(userId)
    const gameMatchDetails = await getGameMatchDetail(arg, populateArgs);
    
    return gameMatchDetails;
	};
}

export default GameService;
