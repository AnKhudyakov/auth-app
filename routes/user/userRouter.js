import Router from "express";
import { authMiddleware } from "../../middleware/authMiddleware.js";
import UserController from "./controllers/UserController.js";

const router = Router();

router.get("/users", authMiddleware, UserController.getUsers);

router.delete(`/user/:id`, authMiddleware, UserController.removeUser);

router.patch(`/user/:id`, authMiddleware, UserController.changeStatus)

export default router;
