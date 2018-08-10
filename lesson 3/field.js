let budget,
	nameShop,
	time,
	price,
	budgetOneDay;

function start() {

	budget = +prompt('Ваш бюджет на месяц?', 'Ваш бюджет - 10000');
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

	if ( mainList.discount == false ) {
		price = budgetOneDay;
		console.log(price);
	} else {
		price = budgetOneDay*0.8;
		console.log(price);
	}
}
discountSystem();

//спросили имена сотрудников Задание 3-4
function takeEmployers() {
	let i = 0;
	while ( i < 4) {
		mainList.employers[i] = prompt("Как Вас зовут?");
		i++;
		console.log(mainList.employers);
	}
}
takeEmployers();

