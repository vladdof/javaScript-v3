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
// let btns = document.getElementsByTagName('button'),
// 	btn_block = document.querySelector('.btn-block');

// btn_block.addEventListener('click', function(event) {
// 	//проверяем что правда есть и на тег button 
// 	//большими буквами при проверке на тег
// 	// if (event.target && event.target.tagName == 'BUTTON') {
// 	// 	console.log("hello");
// 	// }

// 	//также на классы проверить можно
// 	// if (event.target && event.target.className == 'first') {
// 	// 	console.log("hello");
// 	// }

// 	//также другим методом можно проверить по классу. ищем кнопку с классом first 
// 	if (event.target && event.target.matches('button.first')) {
// 		console.log("hello");
// 	}	
// });

// let block = document.querySelector(".box");

	// //рисовать анимацию draw, duration - продолжительность
	// function animate(draw, duration) {
	// 	//время с начала загрузки страницы
	// 	let start = performance.now();
	// 	// рекурсивный вызов анимации
	// 	requestAnimationFrame( function animate(time) { 
	// 	//time это start при вызове анимации

	// 		// сколько вр прошло с начала анимации
	// 		let timePassed = time - start;

	// 		// если вр выполнения анимации привысело > чем заданная длительность, то фикс.конец анимации
	// 		if (timePassed > duration) {
	// 			timePassed = duration;
	// 		}
	// 		// рисуем соотношение анимации в момент timePassed
	// 		draw(timePassed);

	// 		// если время анимации не закончено, то продолжаем анимацию
	// 		if(timePassed < duration) {
	// 			requestAnimationFrame(animate);
	// 		}
	// 	});
	// }

	// block.addEventListener('click', function() {
	// 	animate(
	// 		function(timePassed) {
	// 			block.style.left = timePassed / 5 + 'px';
	// 		},
	// 		2000);
	// });

let block = document.querySelector(".box");

	//рисовать анимацию draw, duration - продолжительность
	function animate({timing, draw, duration}) {
		//время с начала загрузки страницы
		let start = performance.now();
		// рекурсивный вызов анимации
		requestAnimationFrame( function animate(time) { 
		//time это start при вызове анимации

			// сколько вр прошло с начала анимации
			// от 0 до 1
			let timePassed = (time - start) / duration;

			// если вр выполнения анимации привысело > чем заданная длительность, то фикс.конец анимации
			if (timePassed > 1) {
				timePassed = 1;
			}

			// рассчитываем текущее время нашей анимации
			let progress = timing(timePassed);
			// рисуем соотношение анимации в зависимости от текущ состояния
			draw(progress);

			// если время анимации не закончено, то продолжаем анимацию
			if(timePassed < 1) {
				requestAnimationFrame(animate);
			}
		});
	}

	block.addEventListener('click', function() {
		animate( {
			duration: 2000,
			timing: function back(x, timePassed) {
				return Math.pow(timePassed, 2) * ((x + 1) * timePassed - x);
			}.bind(null, 1.5),
			draw: function(progress) {
				block.style.left = progress * 500 + 'px';
 			}
		});
	});