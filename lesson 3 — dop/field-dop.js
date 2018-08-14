//Сделать так, чтобы строка начиналась с большой буквы, замените все “-” на пробелы
let str = "урок-3-был слишком легким";
str = (str.charAt(0).toUpperCase() + str.slice(1)).replace(/-/g, ' ');
let light = str.search(/ле/);
let c = str.slice(light,-2)+"oo";
console.log(str);
document.write(c);

//Теперь замените все “-” на пробелы
// function checkStr() {
	// let a = str.replace(/-/g, ' ');
	// let a = str.split('-').join(' ');
	// console.log(a);

	//Из получившейся строки вырезать слово “легким”, заменить 2 последние буквы на “о”
	// let b = str.search(/ле/);
	// let c = str.slice(b,-2)+"oo";
	// console.log(c);
	// let d = c.substring(0, c.length - 2) + "оо";
	// let d = c.replace(/им/, "оо");
	// document.write(c);
	// let i = 0;
	// while (i < 2 ) {
	// 	let z = "о";
	// 	d = d + z;
	// 	i++;
	// } 
// }
// checkStr();

//Вывести в консоль квадратный корень из суммы кубов его элементов
let arr = [
	20, 
	33, 
	1, 
	"Человек", 
	2, 
	3
];
let cube = [],
	sum,
	sqrt;

for ( let i = 0; i < arr.length; i++ ) {

	if ( typeof (arr[i]) === 'string' ) {
		arr.splice(i, 1);
	}

}

for (let i = 0; i < arr.length; i++) {
	cube[i] = Math.pow(arr[i], 3); 
}

sum = eval(cube.join('+'));
	console.log("Сумма кубов — " + sum);

sqrt = Math.sqrt(sum);
console.log("Квадратный корень — " + sqrt);

// //Создайте функцию, которая принимает 1 аргумент

function checkArgum() {

	let argum;

	while ( isFinite(argum) || argum == null || argum == '' ) {
	   argum = prompt('Введите небольшой рассказ о вашем дне!', '').trim();

	   if ( argum.length >= 15 ) {
	   	argum = argum.slice(0,15) + "...";
	   } 
	   console.log(argum);
	}

	// for(let i = 0; i < 1; i++) {

	// 	let argum = prompt('Введите небольшой рассказ о вашем дне!');

	// 	if ( isNaN(argum) ) {
	// 		alert('молодец!');
	// 	} else {
	// 		alert('Вы ввели неверные данные! Введи рассказ!');
	// 		i--;
	// 	}

	// В полученной строке функция должна убрать все пробелы в начале и в конце
	// console.log(argum.replace(/^\s*|\s*$/g, '')); чуть не умер пока выродил

	//Если строка более 50 знаков - то после 50го символа часть 
	// текста скрывается и вместо них появляются три точки (...) // 50 долго писать 
		// if ( argum.length >= 15) {
		// 	let b= argum.slice(0, 15) + '...';
		// 	console.log(b);
		// } 
};
checkArgum();







