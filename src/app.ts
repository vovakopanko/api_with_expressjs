import express, { Express } from "express";
import { userRouter } from "./users/users";
import { Server } from "http";

export class App {
  app: Express;
  server: Server;
  port: number;

  constructor() {
    this.app = express();
    this.port = 8000;
    this.server = this.app.listen(this.port);
  }

  useRoutes() {
    this.app.use("/users", userRouter);
  }

  public async init() {
    this.useRoutes();
    console.log(`Server started on http://localhost:${this.port}`);
  }
}
