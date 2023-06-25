// express web server //
import express from "express";
const app = express();

// env variables //
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 5001;

// middlewares //
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

// routes //
import userRoutes from "./routes/userRoutes.js";

// use routes //
app.use("/api/users/", userRoutes);

// use middlewares //
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT} ...`);
});
