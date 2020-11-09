//имя функ. должно быть глаголом
//без имени анонимная функция, использ.один раз - здесь и сейчас
//в скобках параметр функции

function showFirstMessage(text) {
	alert(text);

	//переменные объявленные внутри функции не видны вне функции
	//функции сперва ищет внутри себя переменную, а потом ищет выше
	//замыкание - это функция со всеми доступными для нее значениями
	let num = 20;
}

showFirstMessage('Hello world!');


// не важно где мы вызвали функцию, если она обьявлена примером ниже
//это фанкшион декларейшен
function calc(a,b) {
	return a*b
}
console.log(calc(4,5));
console.log(calc(4,15));

//функцион экспрешен. функц.присваиваем в переменную
//она создается только тогда когда доходит до нее код.
// let calc = function(a,b) {
// 	return a*b
// }

//новый синтаксис через стрелку
// let calc = (a,b) => a*b


//свойства строк
let str = 'Test';
console.log(str.length)

//методы строк
console.log(str.toUpperCase());
console.log(str.toLowerCase());

//округление
let num = '12.2';
console.log(Math.round(num));

//до первого символа не цифры
console.log(parseInt(num));
//делает тоже самое, но берет одну точку
console.log(parseFloat(num));
