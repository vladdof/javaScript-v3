function timer() {
	//timer
	let deadline = '2018-08-23';

	function getTimeRemaining(endtime) {
		//переменная разницы между текущей и дедлайном
		let t = Date.parse(endtime) - Date.parse(new Date()),
			seconds = Math.floor( (t/1000) % 60 ),
			minutes = Math.floor( (t/1000/60) % 60 ),
			hours = Math.floor( (t/(1000*60*60)) );

		//Необходимо подставлять 0 перед значениями,
		if ( hours < 10 ) {
			hours = '0' + hours;
		}
		if ( minutes < 10 ) {
			minutes = '0' + minutes;
		}
		if ( seconds < 10 ) {
			seconds = '0' + seconds;
		}

		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	};

	//запуск часов
	function setClock(id, endtime) {

		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds');

		function updateClock() {

			let t = getTimeRemaining(endtime);

			//чтобы в таком случае выводилось: 00:00:00 и все скрипты оставались рабочими
			if ( Date.parse(endtime) < Date.parse(new Date()) ) {
				hours.innerHTML = '00';
				minutes.innerHTML = '00';
				seconds.innerHTML = '00';
				return;
			} else {
				hours.innerHTML = t.hours;
				minutes.innerHTML = t.minutes;
				seconds.innerHTML = t.seconds;
			}

			//когда остановится таймер
			if ( t.total <=0 ) {
				clearInterval(timeInterval);
			}
		};

		updateClock();
		let timeInterval = setInterval(updateClock, 1000);

	};

	setClock('timer', deadline);
}

module.exports = timer;
