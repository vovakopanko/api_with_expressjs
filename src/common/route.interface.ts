import { NextFunction, Request, Response, Router } from 'express';
import { IMiddleWare } from './middleware.interface';

export interface IControllerRoute {
	path: string;
	func: (req: Request, res: Response, next: NextFunction) => void;
	method: keyof Pick<Router, 'get' | 'post' | 'delete' | 'put' | 'patch'>; // get all entered keys after Route | Pick<We take the type from which we want to get the following methods => , that those do we take from the declared type>
	middlewares?: IMiddleWare[];
}

export type ExpressReturnType = Response<any, Record<string, any>>;
