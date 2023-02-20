import express, { Express } from "express";
import { userRouter } from "./users/users";
import { Server } from "http";
import { LoggerService } from "./logger/logger.service";

export class App {
  app: Express;
  server: Server;
  port: number;
  logger: LoggerService;

  constructor(logger: LoggerService) {
    this.app = express();
    this.port = 8000;
    this.logger = logger;
    this.server = this.app.listen(this.port);
  }

  useRoutes() {
    this.app.use("/users", userRouter);
  }

  getHomePage() {
    this.app.get("/", (req, res) => {
      res.send("<h1>HOME PAGE</h1>");
      console.log("WELCOM on HOME PAGE");
    });
  }

  public async init() {
    this.useRoutes();
    this.getHomePage();
    this.logger.info(`Server started on http://localhost:${this.port}`);
  }
}
