import express, { Express } from "express";
import { Server } from "http";
import { LoggerService } from "./logger/logger.service";
import { UsersController } from "./users/users.controller";

export class App {
  app: Express;
  server: Server;
  port: number;
  logger: LoggerService;
  userController: UsersController

  constructor(logger: LoggerService, userController: UsersController) {
    this.app = express();
    this.port = 8000;
    this.logger = logger;
    this.userController = userController;
    this.server = this.app.listen(this.port);
  }

  useRoutes() {
    this.app.use("/users", this.userController.router);
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
