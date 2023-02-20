import { NextFunction, Request, Response } from "express";

export interface IUsersContainer {
  login: (req: Request, res: Response, next: NextFunction) => void;
  register: (req: Request, res: Response, next: NextFunction) => void;
}
