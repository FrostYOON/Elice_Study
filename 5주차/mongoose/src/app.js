import express from "express";
import postRouter from "./routes/post.route.js";
import logger from "morgan";

const app = express();

app.use(express.json());
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));

app.use("/posts", postRouter);

export default app;
