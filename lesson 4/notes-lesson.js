// let options = {
// 	name: 'test',
// 	width: 1024,
// 	height: 1024
// }

// options.bool = false;
// options.colors = {
// 	border: 'black',
// 	background: 'red'
// }

// delete options.bool;

//спец цикл для работы с объектами
for ( let key in options ) {
	console.log("Свойство " + key + " имеет значение " + options[key])
	//прост так объект из объекта не вытащить
}

// //количество свойств объекта
// console.log(Object.keys(options).length);

// //основные методы для работы с массивом
// let arr = [1,2,3,4,5];

// // удаляет последний элемент и возвращает
// arr.pop();

// // добавляет 
// arr.push(6);

// //удаляет в начале
// arr.shift();

// console.log(arr);

// arr[99] = 99;
// //arr.length последний индекс + 1

// //перебор массива
// for ( let i = 0; i < arr.length; i++ ) {
// 	alert(arr[i]);
// }



// let first = [1, "second", 2, 4, 5 ];
// first[99] = 99;
// //более красивый перебор массива
// // first.forEach( function(item,i,arr) {
// // 	console.log(i + ": " + item + "(массив: " + arr + ")")
// // });

// // let first = [];
// // let i = prompt("", "");
// // first = i.split(','); //разбивает 
// // first = i.join(","); //соединяет
// // first = i.sort(); //сортирует по алфавиту но буквы


// // let first = [1,15,2,4]; //идет по-порядку

// // function sortNumbers(a,b) {
// // 	return a - b;
// // }

// // let i = first.sort(sortNumbers)
// // console.log(i);

// //ООП 
// let soldier = {
// 	health: 400,
// 	armor: 100
// }

// let john = {
// 	health: 100
// }

// john.__proto__ = soldier;

// console.log(john);
// console.log(john.armor)
