import { NextFunction, Request, Response } from "express";
import { BaseController } from "../common/base.controller";
import { HTTPError } from "../errors/http-error.class";
import { LoggerService } from "../logger/logger.service";

export class UsersController extends BaseController {
  constructor(logger: LoggerService) {
    super(logger);
    this.binRoutes([
      { path: "/register", method: "post", func: this.register },
      { path: "/login", method: "get", func: this.login },
    ]);
  }

  login(req: Request, res: Response, next: NextFunction) {
    res.send("<h1>login!</h1>");
  }

  register(req: Request, res: Response, next: NextFunction) {
    next(new HTTPError(401, "User is not logged in", "loggin"));
    // this.ok(res, "register");
  }
}
