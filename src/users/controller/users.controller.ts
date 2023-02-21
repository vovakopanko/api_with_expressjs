import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { BaseController } from '../../common/base.controller';
import { HTTPError } from '../../errors/http-error.class';
import { ILogger } from '../../logger/loger.iterface';
import { TYPES } from '../../types';
import 'reflect-metadata';
import { IUsersContainer } from './users.controller.interface';
import { UserLoginDto } from '../dto/user-login.dto';
import { UserRegisterDto } from '../dto/user-register.dto';
import { IUserService } from '../service/users.service.interface';

@injectable()
export class UsersController extends BaseController implements IUsersContainer {
	constructor(
		@inject(TYPES.ILoger) private loggerService: ILogger,
		@inject(TYPES.UserService) private userService: IUserService,
	) {
		super(loggerService);

		this.binRoutes([
			{ path: '/register', method: 'post', func: this.register },
			{ path: '/login', method: 'post', func: this.login },
		]);
	}

	login({ body }: Request<{}, {}, UserLoginDto>, res: Response, next: NextFunction): void {
		console.log(body);
		res.send('<h1>login!</h1>');
	}

	async register(
		{ body }: Request<{}, {}, UserRegisterDto>,
		res: Response,
		next: NextFunction,
	): Promise<void> {
		const result = await this.userService.createUsers(body);
		console.log('result', result);
		if (!result) {
			return next(new HTTPError(422, 'This user with iyt name exists'));
		}
		this.ok(res, { email: result.email, name: result.name });
	}
}
