//ждет пока структура html/css загрузяться, легче чем load
window.addEventListener('DOMContentLoaded', function() {

	let tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		info = document.getElementsByClassName('info-header')[0];

	//все скроем и покажем только первый таб
	function hideTabContent(a) {
		//цикл проверяет количество контекта и присваивает класс hide
		for ( let i = a; i < tabContent.length; i++ ) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}
	//передаем при загрузке страницы, что 1таб будет показан
	hideTabContent(1);

	//функция показана табов
	function showTabContent(b) {
		//проверяем наличие класса hide
		if ( tabContent[b].classList.contains('hide') ) {
			//скрываем все табы
			hideTabContent(0);
			//у выбранного контекта выполняем действия
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	//делигируем события для табов и вешаем обработчик
	info.addEventListener('click', function(event) {
		let target = event.target;

		if (target.className == 'info-header-tab') {
			for (let i = 0; i < tab.length; i++) {
				//проверка на какой именно таб кликнули
				if (target == tab[i]) {
					//показываем таб
					showTabContent(i);
					//если это уже произошло то выходим из цикла
					break;
				}
			}
		};
	});

	//timer
	let deadline = '2018-08-24';

	function getTimeRemaining(endtime) {
		//переменная разницы между текущей и дедлайном
		let timezoneOffset = (new Date().getTimezoneOffset())/60,
			t = Date.parse(endtime) - Date.parse(new Date()),
			seconds = Math.floor( (t/1000) % 60 ),
			minutes = Math.floor( (t/1000/60) % 60 ),
			hours = Math.floor( (t/(1000*60*60)) + timezoneOffset - 1);
		//Необходимо подставлять 0 перед значениями,
		if ( hours < 10 ) {
			hours = "0" + hours;
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

	// modal
	let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close');

	more.addEventListener('click', function() {
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		//нельзя прокручивать страницу, при открытом окне
		document.body.style.overflow = 'hidden';
	});

	close.addEventListener('click', function() {
		overlay.style.display = 'none';
		more.classList.remove('more-splash');

		document.body.style.overflow = '';
	});


	//привязываем модальное окно к табам
	let more_tab = document.querySelectorAll('.description-btn');

	for ( let i = 0; i < more_tab.length; i++ ) {
		more_tab[i].addEventListener('click', function() {
			this.classList.add('more-splash');
			overlay.style.display = 'block';
			document.body.style.overflow = 'hidden';
		});
	}

});
