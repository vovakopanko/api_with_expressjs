#!/usr/bin/env node
import { Container, ContainerModule, interfaces } from 'inversify';
import { App } from './app';
import { ExeptionFilter } from './errors/exeption.filter';
import { ILogger } from './logger/loger.iterface';
import { LoggerService } from './logger/logger.service';
import { TYPES } from './types';
import { UsersController } from './users/users.controller';

export interface Bootstrap {
	appContainer: Container;
	app: App;
}

export const appBindings = new ContainerModule((bind: interfaces.Bind) => {
	bind<ILogger>(TYPES.ILoger).to(LoggerService);
	bind<ExeptionFilter>(TYPES.ExeptionFilter).to(ExeptionFilter);
	bind<UsersController>(TYPES.UsersController).to(UsersController);
	bind<App>(TYPES.Application).to(App);
});

function bootstrap(): Bootstrap {
	const appContainer = new Container();
	appContainer.load(appBindings);
	const app = appContainer.get<App>(TYPES.Application);
	app.init();

	return { app, appContainer };
}

export const { app, appContainer } = bootstrap();
