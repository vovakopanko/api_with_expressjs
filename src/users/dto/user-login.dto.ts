// import { Model } from './user-model.interface';
import { IsEmail, IsString } from 'class-validator';

export class UserLoginDto {
	@IsEmail({}, { message: 'Email is specified incorrectly' })
	email!: string;
	name!: string;
	@IsString({ message: 'Message is specified incorrectly' })
	password!: string;

	// constructor(model: Model) {
	// 	this.email = model.email;
	// 	this.name = model.name;
	// 	this.password = model.password;
	// }
}
