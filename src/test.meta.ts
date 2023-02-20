import 'reflect-metadata';

function Test(target: Function): void {
	Reflect.defineMetadata('a', 1, target);
	const meta = Reflect.getMetadata('a', target);
	console.log(meta);
}

function Prop(target: Object, name: string): void {
	console.log('Prop');
}

@Test
export class C {
	@Prop prop: number;

	constructor() {
		this.prop = 1;
	}
}
