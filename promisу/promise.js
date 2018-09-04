// из-за большой вложенности создали промисы.
// let func1 = function(param, func2) {
// 	func2(function(param, func3) {
// 		func3(function(param, func4) {
// 			func4(function(param, func5) {

// 			})
// 		})
// 	})
// }	

let drink = 1;
//  про летящую стрелу
function shoot(arrow) {
	console.log('Вы сделали выстрел...');
	// 1) необходимо создать промис в нашей функции (обещание)
	let promise = new Promise(function(resolve, reject) {
		// стрела летит 3 сек
		setTimeout(function() {
			// если у нас результат выше 50% то вызываем функ.удачи
			Math.random() > .5 ? resolve({}) : reject("Вы промазали!");
		}, 3000);
	});

	// 2) возвращаем промис во внешний мир
	return promise;
};

// функция победы
function win() {
	console.log(" Вы победили! "); 
	(drink == 1) ? buyBeer() : giveMoney();
}

function buyBeer() {
	console.log(" Вам купили пиво. ");
}

function giveMoney() {
	console.log(" Вам заплатили! ");
}

function loose() {
	console.log(" Вы проиграли! "); 
}

shoot({})
		.then(mark => console.log(" Вы попали в цель! "))
		.then(win)
		.catch(loose)