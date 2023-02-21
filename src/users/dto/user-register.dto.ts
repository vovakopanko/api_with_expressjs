import { Model } from './user-model.interface';
import { IsEmail, IsString } from 'class-validator';

export class UserRegisterDto {
	@IsEmail({}, { message: 'Email is specified incorrectly' })
	email!: string;
	@IsString({ message: 'Name is specified incorrectly' })
	name!: string;
	@IsString({ message: 'Message is specified incorrectly' })
	password!: string;

	// constructor(model: Model) {
	// 	this.email = model.email;
	// 	this.name = model.name;
	// 	this.password = model.password;
	// }
}
