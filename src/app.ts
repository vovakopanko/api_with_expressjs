import express, { Express } from 'express';
import { Server } from 'http';
import { inject, injectable } from 'inversify';
import { ExeptionFilter } from './errors/exeption.filter';
import { ILogger } from './logger/loger.iterface';
import { TYPES } from './types';
import { UsersController } from './users/controller/users.controller';
import 'reflect-metadata';
import { json } from 'body-parser';

@injectable()
export class App {
	app: Express;
	server: Server | undefined;
	port: number;

	constructor(
		@inject(TYPES.ILoger) private logger: ILogger,
		@inject(TYPES.UsersController) private userController: UsersController,
		@inject(TYPES.ExeptionFilter) private exeptionFilter: ExeptionFilter,
	) {
		this.app = express();
		this.port = 8000;
	}

	useRoutes(): void {
		this.app.use('/users', this.userController.router);
	}

	useMiddleWare(): void {
		this.app.use(json());
	}

	getHomePage(): void {
		this.app.get('/', (req, res) => {
			res.send('<h1>HOME PAGE</h1>');
			console.log('WELCOM on HOME PAGE');
		});
	}

	useExeptionFilters(): void {
		this.app.use(this.exeptionFilter.catch.bind(this.exeptionFilter));
	}

	public async init(): Promise<void> {
		this.useMiddleWare();
		this.server = this.app.listen(this.port);
		this.useRoutes();
		this.getHomePage();
		this.useExeptionFilters();
		this.logger.log(`Server started on http://localhost:${this.port}`);
	}
}
