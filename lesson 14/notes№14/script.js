// смысл Инкапсуляции
// function User(name, age) {
// 	this.name = name;
// 	let userAge = age;

// 	this.say = function() {
// 		alert(`Имя пользователя: ${this.name}, возраст: ${userAge}`);
// 	}
// 	// чтобы использовать нашу переменную извне
// 	// методы get-еры
// 	this.getAge = function() {
// 		return userAge;
// 	}
// 	// функция установки
// 	this.setAge = function(age) {
// 		if (typeof age === "number" && age > 0 && age < 110) {
// 			userAge = age;
// 		} else {
// 			console.log("Недопустимое значение");
// 		}
// 	}

// }

// let ivan = new User('Ivan', 25);
// console.log(ivan.name);
// console.log(ivan.getAge());
// ivan.setAge(23);
// console.log(ivan.getAge());

// модули
// let number = 1;
// анонимная функция
// фанкшион экспрейшен. поэтому ее заключаем в скобки
// (function() {

// 	let number = 2;
// 	console.log(number);

// 	return console.log(number+3);
// }())

// console.log(number);

let user = (function() {

	let privat = function() {
		console.log('world')
	}

	let sayHello = function() {
		console.log("hello");
	}
	return { // выводит наружу все
		sayHello: sayHello,
		privat: privat
	}
}())

console.log(user.privat());