let budget,
	nameShop,
	time,
	price,
	budgetOneDay;

function start() {

		//isNaN - если параметр,кот.передали не явл.числом то выдает true 
		while ( isNaN(budget) || budget == '' || budget == null ) {
			budget = +prompt('Ваш бюджет на месяц?', 'Ваш бюджет - 10000');
		}

	nameShop = prompt('Название вашего магазина?', 'Плеер').toUpperCase();
	time = 21;

}
//вызвали функцию
start();

var mainList = {
	budget: budget,
	nameShop: nameShop,
	shopGoods: [],
	employers: {},
	open: true,
	discount: true
};
console.log(mainList.discount);

function chooseGoods() {

	for (let i = 0; i < 3; i++) {

		let a = prompt("Какой тип товаров будем продавать?");

		if ( typeof a === 'string' && a !== null && a != '' && a.length < 50) {
			console.log("Все верно");
			mainList.shopGoods[i] = a;
		} else { //если все варианты пустые в типе товаров, чтобы вернуться к вопросам заново
			alert("Введите верные данные");
			i--;
		}
	}
}
chooseGoods();

function workTime(time) {

	if ( time < 0 ) {
		console.log("Такого не может быть");
	} 	else if (time > 8 && time < 20) {
		console.log("Время работать!");
		} 	else if (time < 24) {
			console.log("Уже поздно");
			} 	else {
				console.log("В сутках только 24 часа!");
				};

}
workTime(16);


console.log(mainList);

//переделали в функцию. Задание 1
function budgetDay() {

	budgetOneDay = budget/30;
	alert("Бюджет на один день — " + budgetOneDay);

}
budgetDay();

//сделали дисконт.систем Задание 2
function discountSystem() {
	price = 1500;

	alert('Цены на все наши товары — 1500 рублей!' + ' ' + 'Успей купить!\n' + 
		'Сейчас только проверим нашу систему скидок.');

	if ( mainList.discount == false ) {
		alert ('У Вас нет скидки по нашей программе!\n' + 'Заплати' + price + ' рублей');
	} else {
		price = price*0.8;
		alert('Поздравляем! Вы получаете скидку в 20%!\n' + 'Заплати ' + price + ' рублей');
	}
}
discountSystem();

//спросили имена сотрудников Задание 3-4
function takeEmployers() {

	for (let i = 0; i < 4; i++) {

		let a = prompt("Как Вас зовут?");

		if ( isNaN(a) && a != '' && a != null) {
			mainList.employers['number' + '—' + i] = a;
		} else {
			alert("Введите только имя!");
			i--;
		}

	}
}
takeEmployers();

