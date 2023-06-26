// set up express router //
import express from "express";
const router = express.Router();

// user controller logic //
import {
  registerUser,
  authUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController.js";

// authMiddleware for protected routes only //
import { protect } from "../middleware/authMiddleware.js";

// public routes //
router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
// private routes //
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
