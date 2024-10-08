import express from "express";
import { login, logout, register, updateprofile } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/profile/update").post(isAuthenticated,updateprofile);
//router.route("/register").post(logout);

export default router;
