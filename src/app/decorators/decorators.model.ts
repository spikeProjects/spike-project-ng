import { deprecate } from 'core-decorators';

// 装饰器(Decorator)是一个会被执行的表达式，她还必须再返回一个函数。
export const readonly = (target, name, descriptor) => {
	descriptor.writable = false;
}

// 在 property descriptor被注册到 Cat.prototype 之前，执行引擎会先执行装饰器(Decorator)：
//装饰器和`Object.defineProperty`具有相同的参数列表，//有机会在真正的`defineProperty`之行之前做点儿事情
export class Cat {
	constructor(private name: string) {}

	@readonly
	meow() {
		return `${this.name} says Meow`;
	}
}
/**
Object.defineProperty(target, name, descriptor)
参数
target:		要在其上定义属性的对象。
name:		要定义或修改的属性的名称。
descriptor: 将被定义或修改的属性描述符。
返回值:		被传递给函数的对象。

descriptor(数据描述符)和存取描述符均具有以下可选键值：

configurable
当且仅当该属性的 configurable 为 true 时，该属性描述符才能够被改变，同时该属性也能从对应的对象上被删除。默认为 false。
enumerable
当且仅当该属性的enumerable为true时，该属性才能够出现在对象的枚举属性中。默认为 false。
数据描述符同时具有以下可选键值：

value
该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。默认为 undefined。
writable
当且仅当该属性的writable为true时，value才能被赋值运算符改变。默认为 false。
存取描述符同时具有以下可选键值：

get
一个给属性提供 getter 的方法，如果没有 getter 则为 undefined。该方法返回值被用作属性值。默认为 undefined。
set
一个给属性提供 setter 的方法，如果没有 setter 则为 undefined。该方法将接受唯一参数，并将该参数的新值分配给该属性。默认为 undefined。

*/

export class Dog {
	constructor(private name: string) {}

	// @readonly
	hao() {
		return `${this.name} says hao`;
	}
}

export class Person{
	@deprecate
	facepalm() {
	}

	@deprecate('We stopped facepalming')
	facepalmHard() {
	}

	@deprecate('We stopped facepalming', { url: 'http://knowyourmeme.com/memes/facepalm' })
	facepalmHarder() {
	}
}


export function superhero(target){
	target.isSuperhero = true;
	target.power = 'flight';
}
/*export function superhero(isSuperhero) {
    return function(target){
        target.isSuperhero = isSuperhero;
    };
}*/

@superhero
export class MySuperHero{}
// below line has error
console.log(MySuperHero);

// ES2016的装饰器(Decorator)在属性和类上皆可工作。
// 装饰器可以自动获取传入的 property name 、 target object。
// 装饰器(Decorator)里能拿到 descriptor 使得譬如:
// 用getter替换属性获取、自动绑定等以前要很繁琐才能完成的工作变为可能。