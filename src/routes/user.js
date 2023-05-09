import exppress from "express";
import UserController from "../controller/user.js";
import userMiddleware from "../middleware/userMiddleware.js";

const userRouter = exppress.Router();
const userController = new UserController();

userRouter.get("/",userMiddleware, userController.getUsers);
userRouter.get("/:userId/games",userMiddleware, userController.getUserGames);

export default userRouter;
