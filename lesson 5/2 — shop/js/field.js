//Получить кнопку "Открыть магазин" через id
let btnOpen = document.getElementById('open-btn'),
//Получить все поля в левом меню через классы
	leftSide = document.getElementsByClassName('main-info'),
	leftInput = document.querySelectorAll('div[class$="-value"]'),
//олучить поля категории товаров через класс
	goodsItems = document.getElementsByClassName('goods-item'),
//Получить все 3 кнопки через Tag
	rightSide = document.querySelector('.main-functions'),
	btn = rightSide.getElementsByTagName('button'),
	// console.log(btn);
//Получить поля ввода товаров, времени и расчета бюджета через querySelector
 	inputChooseItems = document.querySelector("#items"),
 	inputTime = document.querySelector("#time"),
 	inputBudget = document.querySelector("#budget"),
//Получить поля имен сотрудников через querySelectorAll
 	nameEmployers = document.querySelectorAll(".hire-employers-item");


