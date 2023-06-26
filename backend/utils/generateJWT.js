import jwt from "jsonwebtoken";

const generateJWT = (res, userId) => {
  const jsonwebtoken = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  // create cookie containing jwt
  res.cookie("jwt", jsonwebtoken, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development", // secure will be false if in dev mode, true if not in dev mode
    sameSite: "strict", // to prevent CSRF attacks
    maxAge: 30 * 24 * 60 * 60 * 1000, // when cookie expires (30 days set in milliseconds)
  });
};

export default generateJWT;
