import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const protect = asyncHandler(async (req, res, next) => {
  const jsonwebtoken = req.cookies.jwt;

  // check if jwt exists
  if (jsonwebtoken) {
    try {
      // verify the jwt
      const decoded = jwt.verify(jsonwebtoken, process.env.JWT_SECRET);
      // create req.user to send to next route
      req.user = await User.findById(decoded.userId).select("-password");
      next();
    } catch (err) {
      res.status(401);
      throw new Error("Not Authorized, invalid JWT.");
    }
  } else {
    res.status(401);
    throw new Error("Not Authorized, no JWT.");
  }
});

export { protect };
