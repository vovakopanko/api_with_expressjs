#!/usr/bin/env node
import { Container } from "inversify";
import { App } from "./app";
import { ExeptionFilter } from "./errors/exeption.filter";
import { ILogger } from "./logger/loger.iterface";
import { LoggerService } from "./logger/logger.service";
import { TYPES } from "./types";
import { UsersController } from "./users/users.controller";

const appContainer = new Container();
appContainer.bind<ILogger>(TYPES.ILoger).to(LoggerService);
appContainer.bind<ExeptionFilter>(TYPES.ExeptionFilter).to(ExeptionFilter);
appContainer.bind<UsersController>(TYPES.UsersController).to(UsersController);
appContainer.bind<App>(TYPES.Application).to(App);

const app = appContainer.get<App>(TYPES.Application);
app.init();

export { app, appContainer };
