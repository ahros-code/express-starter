import express from "express";
import dotenv from "dotenv"
import {router as usersRouter} from "./routers/users.router.js";

(function () {
  const app = express();
  dotenv.config()
  app.use(express.json())
  app.use(usersRouter);
  app.listen(5000, () => console.log("Server is running..."));
})()