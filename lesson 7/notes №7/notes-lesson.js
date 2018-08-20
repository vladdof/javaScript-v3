// let timerId = setTimeout(func, delay, arg1, arg2...);
// //синтаксис функции с задержкой в млс
// //два параметра х и y можно указывать прям в функции setTimeout
// function func (x, y);

// //отмена таймера функции
// clearTimeout(timerId);
// //из за этого мы поместили таймер в переменную

// //функция с интервалом
// let timerId = setInterval(func, delay, arg1);
// //delay здесь сколько времени будет выполняться

// //рекурсивный вызов самой функции. сама себя через определенный промежуток времени
// let timerId = setTimeout(log, 2000)

// function log() {
// 	console.log("hello");
// 	timerId = setTimeout(log, 2000);
// }

// let btn = document.querySelector('.btn');
// console.log(btn);

// function myAnimation() {
// 	let elem = document.querySelector(".box"),
// 		pos = 0,
// 		id = setInterval(frame, 10);
// 		console.log(elem);

// 	function frame() {
// 		if (pos == 260) {
// 			clearInterval(id);
// 		} else {
// 			pos++;
// 			elem.style.top = pos + 'px';
// 			elem.style.left = pos + 'px';
// 		}
// 	}
// }

// btn.addEventListener('click', myAnimation);


//основы делегирования события с его родителя на его потомки
let btns = document.getElementsByTagName('button'),
	btn_block = document.querySelector('.btn-block');

btn_block.addEventListener('click', function(event) {
	//проверяем что правда есть и на тег button 
	//большими буквами при проверке на тег
	// if (event.target && event.target.tagName == 'BUTTON') {
	// 	console.log("hello");
	// }

	//также на классы проверить можно
	// if (event.target && event.target.className == 'first') {
	// 	console.log("hello");
	// }

	//также другим методом можно проверить по классу. ищем кнопку с классом first 
	if (event.target && event.target.matches('button.first')) {
		console.log("hello");
	}	
});