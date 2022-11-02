import "reflect-metadata";
import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import { personRoutes } from "./modules/person/routes/person.routes";
import { AppError } from "./shared/errors/AppError";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/person", personRoutes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        statusCode: err.statusCode,
        message: err.message,
      });
    }
    return response.status(500).json({
      status: "Error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

app.listen(3333, () => console.log("Servidor rodando."));
