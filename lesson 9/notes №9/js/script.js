// function User(name, id) {
// 	this.name = name;
// 	this.id = id;
// 	this.human = true;
// 	this.hello = function() {
// 		alert('Hello ' + this.name);
// 	}
// 	//функция превратилась в конструктор
// 	//при вызове превращается в объект с заданными параметрами
// }
// //прототип добавили прям на лету.
// User.prototype.exit = function(name) {
// 	alert('Пользователь ' + this.name + ' ушел');
// }

// let ivan = new User('Ivan', 23);
// let alex = new User('Alex', 20);
// console.log(ivan);
// console.log(alex);
// ivan.exit();
// alex.hello();


// let user = {
// 	name: 'John'
// };
// function sayName(surname) {
// 	console.log(this);
// 	console.log(this.name + surname);
// }

// console.log(sayName.call(user, 'Smith'));
// console.log(sayName.apply(user, ['Snow']));

// function count(number) {
// 	return this * number;
// };

// //создаем фукнцию удваивания
// let double = count.bind(2); //вместо this будет подставляться 2

// console.log(double(3));
// console.log(double(10));


//теперь играем с DOM
let btn = document.getElementsByTagName('button')[0];
//если событие происходит на элементе то событием явл сам элемент
btn.addEventListener('click', function() {
	this.style.backgroundColor = 'red';
});

// 1) просто вызов функ. то контекст window / undefined если строгий режим
// 2) если функц как метод то this = самому объекту
// 3) функц как конструктор (new) = this = созданный объект
// 4) указание конкретного контекста - выполняется через call, apply, bind


//выведит в консоль без строгого режима.
//он изменяет симантику и ошибки уже не прощает
// "use strict"
// num = 4;
// console.log(num);


//контекст вызова или this, и как она называется
//в этом случае наша функция принадлежит window
// function showThis() {
// 	console.log(this);
// };
// showThis();

//функция внутри функции считает своим контекстом выполнения window
// "use strict" //вместо windiw будет undefind/ теперь функ. не могут брать методы от глобального объекта и свойства
// function showThis(a,b) {
// 	console.log(this);
// 		function sum() {
// 			console.log(this);
// 			// return this.a + this.b;
// 			return a + b
// 		}

// 		console.log(sum());
// };
// showThis(4,5);
// showThis(5,5);


// let obj = {
// 	a: 20,
// 	b: 15,
// 	sum: function() {
// 		//функц.внутри функции, объект выполнения window
// 		function shout() {
// 			console.log(this);
// 		}
// 		shout();
// 	}
// }
// obj.sum();
