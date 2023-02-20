function Component(id: number): (target: Function) => void {
	console.log('init Component');
	return (target: Function) => {
		console.log('run Component');
		target.prototype.id = id;
	};
}

function Logger(): (target: Function) => void {
	console.log('init Logger');
	return (target: Function) => {
		console.log('run Logger');
	};
}

function Method(target: Object, propertyKey: string, propertyDescriptor: PropertyDescriptor): void {
	console.log(propertyKey);
	propertyDescriptor.value = function (...args: unknown[]): number | undefined {
		if (typeof args[0] === 'number') {
			return args[0] * 10;
		}
	};
}

function Prop(target: Object, propertyKey: string): void {
	let value: number;

	const getter = (): number => {
		console.log('GET');
		return value;
	};

	const setter = (newValue: number): any => {
		console.log('SET');
		value = newValue;
	};

	Object.defineProperty(target, propertyKey, {
		get: getter,
		set: setter,
	});
}

function Param(target: Object, propertyKey: string, index: number): void {
	console.log(target, propertyKey, index);
}

@Logger()
@Component(5)
export class User {
	@Prop id: number | undefined;

	@Method
	updateId(@Param newId: number): number {
		this.id = newId;
		return this.id;
	}
}

console.log(new User().id);
console.log(new User().updateId(5));
