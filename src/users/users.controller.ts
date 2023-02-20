import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { BaseController } from '../common/base.controller';
import { HTTPError } from '../errors/http-error.class';
import { ILogger } from '../logger/loger.iterface';
import { TYPES } from '../types';
import 'reflect-metadata';
import { IUsersContainer } from './users.controller.interface';

@injectable()
export class UsersController extends BaseController implements IUsersContainer {
	constructor(@inject(TYPES.ILoger) private loggerService: ILogger) {
		super(loggerService);
		this.binRoutes([
			{ path: '/register', method: 'post', func: this.register },
			{ path: '/login', method: 'get', func: this.login },
		]);
	}

	login(req: Request, res: Response, next: NextFunction): void {
		res.send('<h1>login!</h1>');
	}

	register(req: Request, res: Response, next: NextFunction): void {
		console.log('dfsfsdfsd');
		next(new HTTPError(401, 'User is not logged in', 'loggin'));
		// this.ok(res, "register");
	}
}
