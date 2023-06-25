// set up express router //
import express from "express";
const router = express.Router();

// controller logic //
import {
  registerUser,
  authUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController.js";

// public routes //
router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
// private routes //
router.route("/profile").get(getUserProfile).put(updateUserProfile);

export default router;
