import express, { application } from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is Running on PORT " + PORT);
  });
});
