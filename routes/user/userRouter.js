import Router from "express";
import { authMiddleware } from "../../middleware/authMiddleware.js";
import UserController from "./controllers/UserController.js";

const router = Router();

router.get("/users", authMiddleware, UserController.getUsers);

router.delete(`/user/:id`, authMiddleware, UserController.removeUser);

export default router;
