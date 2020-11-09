var budget = +prompt('Ваш бюджет на месяц?', '10000');
var	nameShop = prompt('Название вашего магазина?', 'Плеер');
var time = 19;

var mainList = {
	budget: budget,
	nameShop: nameShop,
	shopGoods: [],
	employers: {},
	open: true
};

for (let i = 0; i < 3; i++) {

	let a = prompt('Какой тип товаров будем продавать?');

	//сравниваем, чтобы 'a' была строкой и не была пустой и не было отмены
	//и количество символов вводимых не больше 50
	//(typeof(a)) === null - чтобы не было отмены
	//typeof() - возращает тип строки
	// a != '' - введена не пустая строка, если просто нажато ОК
	if ( typeof a === 'string' && a !== null && a != '' && a.length < 50) {
		console.log('Все верно');
		mainList.shopGoods[i] = a;
	} else { //если все варианты пустые в типе товаров, чтобы вернуться к вопросам заново
		alert('Введите верные данные');
		i--;
	}
}


// i = 0;
// while (i < 3) {
// 	let a = (prompt('Какой тип товаров будем продавать?'));
// 	mainList.shopGoods[i] = a;
// 	i++;
// }

//второй вариант
// i = 0;
// while (i < 3) {
// 	let a = (prompt('Какой тип товаров будем продавать?'));
// 	if ( typeof a === 'string' && a !== null && a != '' && a.length < 50) {
// 		console.log('Все верно');
// 		mainList.shopGoods[i] = a;
// 		i++;
// 	} else {
// 		alert('Введите верные данные');
// 	};
// }

//третий вариант
// i = 0;
// do {
// 	let a = prompt('Какой тип товаров будем продавать?');
// 	if ( typeof a === 'string' && a !== null && a != '' && a.length < 50) {
// 		console.log('Все верно');
// 		mainList.shopGoods[i] = a;
// 		i++;
// 	} else {
// 		alert('Введите верные данные');
// 	};
// } while (i < 3);

if ( time < 0 ) {
	console.log('Такого не может быть');
} else if (time > 8 && time < 20) {
	console.log('Время работать!');
	} else if (time < 24) {
		console.log('Уже поздно');
		} else {
			console.log('В сутках только 24 часа!');
		};

console.log(mainList);

var budgetOneDay = budget/30;
alert('Бюджет на один день - ' + budgetOneDay);
