import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import authRouter from "./routes/auth/authRouter.js";
import userRouter from "./routes/user/userRouter.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:8080"],
  })
);
app.use(express.json());
app.use("/auth", authRouter);
app.use("/", userRouter);
async function start() {
  try {
    await mongoose
      .connect(process.env.MONGODB_KEY, {
        useNewUrlParser: true,
        //useFindAndModify: false,
      })
      .then(() => console.log("DB Connection Successfull!"))
      .catch((err) => {
        console.log(err);
      });

    app.listen(PORT, () => {
      console.log(`🚀 Server has been started on port: ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
}

start();
