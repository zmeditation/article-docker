import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import * as bodyParser from "body-parser";
import { router } from "./routes";
import connection from "./config/connection";
import cors from "cors";

function loggerMiddleware(
  request: express.Request,
  response: express.Response,
  next: any
) {
  console.log(`${request.method} ${request.path}`);
  next();
}

const app = express();
dotenv.config(); //Reads .env file and makes it accessible via process.env

const start = async (): Promise<void> => {
  try {
    await connection.sync();
    app.use(cors());
    app.use(express.json());
    app.use("/articles", router);
    app.use(loggerMiddleware);
    app.listen(process.env.PORT, () => {
      console.log(`Server started on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

void start();
