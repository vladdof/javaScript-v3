//Получить кнопку "Открыть магазин" через id
let btnOpen = document.getElementById('open-btn'),
//Получить все поля в левом меню через классы
	nameValue = document.getElementsByClassName('name-value')[0],
	budgetValue = document.getElementsByClassName('budget-value')[0],
	goodsValue = document.getElementsByClassName('goods-value')[0],
	itemsValue = document.getElementsByClassName('items-value')[0],
	employersValue = document.getElementsByClassName('employers-value')[0],
	discountValue = document.getElementsByClassName('discount-value')[0],
	isopenValue = document.getElementsByClassName('isopen-value')[0],
//получить поля категории товаров через класс
	goodsItems = document.getElementsByClassName('goods-item'),
//Получить все 3 кнопки через Tag
	rightSide = document.querySelector('.main-functions'),
	btnGoods = rightSide.getElementsByTagName('button')[0],
	btnBudget = rightSide.getElementsByTagName('button')[1],
	btnEmployers = rightSide.getElementsByTagName('button')[2],
//Получить поля ввода товаров, времени и расчета бюджета через querySelector
 	inputChooseItems = document.querySelector("#items"),
 	inputTime = document.querySelector("#time"),
 	inputBudget = document.querySelector("#budget"),
//Получить поля имен сотрудников через querySelectorAll
 	nameEmployers = document.querySelectorAll(".hire-employers-item"),

 	//задание к 6 дополнительному
 	main = document.querySelector('.main'),
 	open_box = document.querySelector('.open'),
 	discount_box = document.querySelector('.discount-box');

 	main.style.display = "none";
 	discount_box.style.display = "none";
 	


let budget,
	nameShop,
	price,
	budgetOneDay;

//проверка инпутов на латиницу и цифры
for ( let i = 0; i < nameEmployers.length; i++) {
	nameEmployers[i].oninput = function()  {
		let a = nameEmployers[i].value;
			if ( a.replace(/[^a-z|0-9]+/g,'') ) {
				nameEmployers[i].value = '';
			}
	};
};


btnOpen.addEventListener('click', () => {
//isNaN - если параметр,кот.передали не явл.числом то выдает true 
	while ( isNaN(budget) || budget == '' || budget == null ) {
		budget = +prompt('Ваш бюджет на месяц?', 'Ваш бюджет - 10000');
	}
	budgetValue.textContent = budget;

	nameShop = prompt('Название вашего магазина?', 'Плеер').toUpperCase();
	nameValue.textContent = nameShop;

	//6 доп задание
	main.style.display = "";
	open_box.style.display = "none";
	discount_box.style.display = "block";
});

//деактивация кнопок
btnEmployers.disabled = true;
btnGoods.disabled = true;


btnGoods.addEventListener('click', () => {

	for (let i = 0; i < goodsItems.length; i++) {

		let a = goodsItems[i].value; 

		if ( typeof a === 'string' && a !== null ) {
			console.log("Все верно");
			mainList.shopGoods[i] = a;

			//из инпутов ввода товаров, переносим в див категория товаров
			goodsValue.textContent = mainList.shopGoods;
		} else { //если все варианты пустые в типе товаров, чтобы вернуться к вопросам заново
			i--;
		}
	}
});

btnEmployers.addEventListener('click', () => {
	//перезаписываем имена сотрудников
	employersValue.textContent = "";

		for (let i = 0; i < nameEmployers.length; i++) {

			let name = nameEmployers[i].value; 

			if ( isNaN(name) ) {
				console.log("Все верно");

				mainList.employers[i] = name;

				//из инпутов ввода товаров, переносим в див категория товаров
				employersValue.textContent += mainList.employers[i] + ', ';
			} 
		}
	// }

	
});

inputChooseItems.addEventListener('change', () => {
		let items = inputChooseItems.value;
		//проверка,Что пользователь может ввести
		if (isNaN(items) && items != '') {
			mainList.shopItems = items.split(',');
			mainList.shopItems.sort();

			itemsValue.textContent = mainList.shopItems;
		}
		console.log(mainList.shopItems); 
});

inputTime.addEventListener('change', () => {
	let time = inputTime.value;

	if ( time < 0 ) {
			console.log("Такого не может быть");
			mainList.open = false;
		} 	else if (time >= 8 && time <= 20) {
			console.log("Время работать!");
			mainList.open = true;
			} 	else if (time < 24) {
				console.log("Уже поздно");
				mainList.open = false;
				} 	else {
					console.log("В сутках только 24 часа!");
					mainList.open = false;
					};

	if (mainList.open == true) {
		isopenValue.style.backgroundColor = "green";
		isopenValue.textContent = "Открыто";

		btnBudget.disabled = false;
		//инпуты сотрудников пустые и магазин открыт
		btnEmployers.disabled = true;
		for ( let i = 0; i < nameEmployers.length; i++) {
			nameEmployers[i].oninput = function()  {
				let a = nameEmployers[i].value;
				if (a.lenght != 0 && a != '') {
					btnEmployers.disabled = false;

					//проверка инпутов на латиницу и цифры
					if ( a.replace(/[^a-z|0-9]+/g,'') ) {
						nameEmployers[i].value = '';
					}
				} else { 
					btnEmployers.disabled = true;
				}
			};
		};

		//инпуты товаров пустые
		btnGoods.disabled = true;
		for ( let i = 0; i < goodsItems.length; i++) {
			goodsItems[i].oninput = function()  {
				let a = goodsItems[i].value;

				if (a.lenght != 0 && a != '') {
					btnGoods.disabled = false;
				} else { 
					btnGoods.disabled = true; 
				}
			};
		};

	} else {
		isopenValue.style.backgroundColor = "red";
		isopenValue.textContent = "Закрыто";

		btnGoods.disabled = true;
		btnBudget.disabled = true;
		btnEmployers.disabled = true;
	}

	if (time >= 9 && time <= 10) {
		discountValue.style.backgroundColor = "green";
		discountValue.textContent = "Время скидок!";
	} else {
		discountValue.style.backgroundColor = "red";
		discountValue.textContent = "Нет скидок!";
	}
});



btnBudget.addEventListener('click', () => {

	inputBudget.value = budget/30;

});



var mainList = {
	budget: budget,
	nameShop: nameShop,
	shopGoods: [],
	employers: {},
	open: false,
	discount: true,
	shopItems: [],
	discountSystem: function discountSystem() {
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
};

