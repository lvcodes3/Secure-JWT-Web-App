// MongoDB User Schema //
import User from "../models/userModel.js";

// To Hash Passwords //
import bcrypt from "bcryptjs";

// To Generate JWTs //
import generateJWT from "../utils/generateJWT.js";

// To Use Async Await & Not Try Catch //
import asyncHandler from "express-async-handler";

// @desc    Register User
// @route   POST http://localhost:5000/api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  // get data
  const { name, email, password } = req.body;

  // check if user already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    // client error
    res.status(400);
    throw new Error("User already exists.");
  }

  // hash password
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);

  // create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });
  if (user) {
    // generate the JWT
    generateJWT(res, user._id);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Error creating user.");
  }
});

// @desc    Authenticate User & Set Token (Login)
// @route   POST http://localhost:5000/api/users/auth
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  // get data
  const { email, password } = req.body;

  // check if user exists
  const user = await User.findOne({ email });
  if (user) {
    // check if password is correct
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      res.status(401);
      throw new Error("Invalid email or password.");
    }

    // generate the JWT
    generateJWT(res, user._id);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password.");
  }
});

// @desc    Logout User
// @route   POST http://localhost:5000/api/users/logout
// @access  Public
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "User logged out." });
});

// @desc    Get User Profile
// @route   GET http://localhost:5000/api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  // access to req.user from the authMiddleware
  const user = {
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
  };
  res.status(200).json(user);
});

// @desc    Update User Profile
// @route   PUT http://localhost:5000/api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  // get user from the db
  const user = await User.findById(req.user._id);

  // check that user exists
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      // hash password
      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      user.password = hashedPassword;
    }

    // save updated user data
    const updatedUser = await user.save();

    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
    });
  } else {
    res.status(404);
    throw new Error("User not found.");
  }
});

export {
  registerUser,
  authUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
