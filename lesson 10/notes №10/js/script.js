// let name = "ivan",
// 	age = 30,
// 	mail = "x@gmail.com";

// //такая запись неудобна
// // document.write("Пользователю " + name + ' ' + age + ' лет. Его почтовый адрес: ' + mail);

// //надо лучше запись, интерполяция. так проще использовать переменные
// document.write(`Пользователю ${name} ${age} лет. Его почтовый адрес: ${mail}`);

// function makeArray() {

// 	let items = [];

// 	for (let i = 0; i < 10; i++) {
// 		let item = function() {
// 			console.log(i);
// 		}

// 		items.push(item);
// 	}

// 	return items;
// }
// let arr = makeArray();

// //потому что внутри массива функции
// arr[1]();
// arr[3]();
// arr[7]();

//стрелочная функция всегда анонимна. мы не сможешь делать рекурсию и навешивать события из-за этого
// let fun = () => {
// 	console.log(this)
// }
// fun(); //на выходе получим window


// let obj = {
// 	number: 5,
// 	sayNumber: function() {
// 		//он запускает функцию и задаем действие
// 		let say = () => { //стрелочная функция возвращает контекст вокруг себя
// 			console.log(this)
// 		}
// 		say();
// 	}
// }

// obj.sayNumber();


// let btn = document.getElementsByTagName("button")[0];

// btn.addEventListener('click', function() {
// 	let show = () => {
// 		console.log(this); //при клике мы получаем кнопку
// 	}
// 	show();
// });


// function calcOrDouble(number,basis = 2) { //можно прям в объявлении функции написать дефолтное значение
// 	//если не передан втор.аргумент то удваиваем число
// 	// basis = basis || 2; //по умолчанию делаем двойку
// 	console.log(number*basis);
// }
// calcOrDouble(6);

//как пишутся классы в новом стандарте
class Rectangle {
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}

	//дальше методы нашего объекта
	calcArea() {
		return this.height * this.width;
	}
}
const square = new Rectangle(10, 15);
console.log(square.calcArea());