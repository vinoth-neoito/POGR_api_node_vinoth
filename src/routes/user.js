import exppress from "express";
import User from "../models/user.js";
import UserController from "../controller/user.js";

const userRouter = exppress.Router();
const userController = new UserController();

userRouter.get("/", userController.getUsers);
userRouter.get("/:userId/games", userController.getUserGames);

export default userRouter;
