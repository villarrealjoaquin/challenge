import express, { json } from "express";
import cors from "cors";
import apiRouter from "./routers/index";
import dotenv from "dotenv";
import cookiesParser from "cookie-parser";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(json());
app.use(cookiesParser());
app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

export default app;
