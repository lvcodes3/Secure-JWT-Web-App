// express web server //
import express from "express";
const app = express();

// env variables //
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 5001;

// mongodb connection //
import connectDB from "./config/db.js";
connectDB();

// initialized middlewares //
import cookieParser from "cookie-parser";
app.use(express.json()); // allows to send & receive JSON
app.use(express.urlencoded({ extended: true })); // allows to send & receive x-www-form-urlencoded
app.use(cookieParser());

// import and use routes //
import userRoutes from "./routes/userRoutes.js";
app.use("/api/users/", userRoutes);

// error middlewares //
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
app.use(notFound);
app.use(errorHandler);

// start server //
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT} ...`);
});
