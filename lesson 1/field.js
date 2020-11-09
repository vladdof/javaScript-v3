var budget = +prompt('Ваш бюджет на месяц?', '10000');
var	nameShop = prompt('Название вашего магазина?', 'Плеер');

var mainList = {
	budget: '',
	nameShop: '',
	shopGoods: [],
	employers: {},
	open: true
};

mainList.shopGoods[0] = prompt('Какой тип товаров будем продавать?');
mainList.shopGoods[1] = prompt('Какой тип товаров будем продавать?');
mainList.shopGoods[2] = prompt('Какой тип товаров будем продавать?');

console.log(mainList.shopGoods);

var budgetOneDay = budget/30;
alert('Бюджет на один день - ' + budgetOneDay);
