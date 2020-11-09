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

	// form
	let message = new Object();
	message.loading = 'Загрузка...';
	message.success = 'Спасибо! Скоро мы с вами свяжемся';
	message.failure = 'Что-т пошло не так...';

	// получили всплывающую форму
	let form = document.getElementsByClassName('main-form')[0],
		input = form.getElementsByTagName('input'),

		// получили форму контакт
		cont_form = document.getElementById('form'),
		cont_input = cont_form.getElementsByTagName('input'),
		// создали уведомление об отправке
		statusMessage = document.createElement('div');
		// добавили ему класс
		statusMessage.classList.add('status');

	cont_form.addEventListener('submit', function(event) {
		event.preventDefault();
		cont_form.appendChild(statusMessage);

		let request = new XMLHttpRequest();

		request.open('POST', 'server.php');
		request.setRequestHeader('Content-Type', 'application/x-www/form/urlencoded');

		let formData = new FormData(cont_form);

		request.send(formData);

		request.onreadystatechange = () => {
			if ( request.readyState < 4 ) {
				statusMessage.innerHTML = message.loading;
			}	else if ( request.readyState === 4 ) {
				if ( request.status == 200 && request.status < 300 ) {
					statusMessage.innerHTML = message.success;
				} else {
					statusMessage.innerHTML = message.failure;
				}
			}
		}

		for ( let i = 0; i < cont_input.length; i++ ) {
			cont_input[i].value = '';
		}
	});

	// событие на форму submit (отправка формы)
	form.addEventListener('submit', function(event) {
		// чтобы страница не перезагружалась
		event.preventDefault();
		// вставили сообщение
		form.appendChild(statusMessage);

		// ajax
		let request = new XMLHttpRequest();
		// настройка
		request.open('POST', 'server.php')
		// кодировка данных
		request.setRequestHeader('Content-Type', 'application/x-www/form/urlencoded');

		// получаем данные из input
		let formData = new FormData(form);

		// отправляем на сервер данные
		request.send(formData);

		// статус готовности нашего проекта
		request.onreadystatechange = function() {
			if (request.readyState < 4) {
				statusMessage.innerHTML = message.loading;
			} else if (request.readyState === 4) {
				if (request.status == 200 && request.status < 300) {
					statusMessage.innerHTML = message.success;
					// можно добавлять контент на страницу. лоадер бар, анимацию и тд
				} else {
					statusMessage.innerHTML = message.failure;
				}
			}
		}

		// чтобы после отправки поля были пустые
		for (let i = 0; i < input.length; i++) {
			input[i].value = '';
			// очищаем поля ввода
		}
	});


	// слайдер
	// показываться будет первый
	let slideIndex = 1,
		slides = document.getElementsByClassName('slider-item'),
		prev = document.querySelector('.prev'),
		next = document.querySelector('.next'),
		// блок с точками
		dotsWrap = document.querySelector('.slider-dots'),
		dots = document.getElementsByClassName('dot');

	showSlides(slideIndex); // чтобы показывал первый слайд
	// функция показа первого слайда
	function showSlides(n) {
		if (n > slides.length) {
			// чтобы вернуться к первому слайду после прокрутки до последнего
			slideIndex = 1;
		};
		if (n < 1) {
			slideIndex = slides.length;
		};

		// скрыть все слайды, показывая только нужный
		for (let i = 0; i < slides.length; i++) {
			slides[i].style.display = 'none';
		}
		// скрыть все активные точки
		for (let i = 0; i < dots.length; i++) {
			dots[i].classList.remove('dot-active');
		}

		// получаем первый слайд // slideIndex - 1 каждый массив идет с нуля
		slides[slideIndex - 1].style.display = 'block';
		dots[slideIndex - 1].classList.add('dot-active');
	};

	// добавляет или удаляет количество слайдов
	function plusSlides(n) {
		showSlides(slideIndex += n);
	}

	// найти какой слайд работает
	function currentSlide(n) {
		showSlides(slideIndex = n);
	}

	// стрелки
	prev.addEventListener('click', () => {
		plusSlides(-1);
	});
	next.addEventListener('click', () => {
		plusSlides(1);
	});

	// прием делигирования клик на обертку
	dotsWrap.addEventListener('click', function(event) {
		let target = event.target;
		console.log(target);

		for (let i = 0; i < dots.length + 1; i++) { // почему +1 ?
			if (target.classList.contains('dot') && target == dots[i-1]) {
				currentSlide(i);
			}
		}
	});

	// калькулятор на сайте
	let persons = document.getElementsByClassName('counter-block-input')[0],
		restDays = document.getElementsByClassName('counter-block-input')[1],
		inputCalc = document.querySelectorAll('.counter-block-input'),
		place = document.getElementById('select'),
		totalValue = document.getElementById('total'),
		personsSum = 0,
		daysSum = 0,
		total = 0;

	// почему innerHTML, сам говорил, что лучше textContent
	totalValue.innerHTML = 0;

	persons.addEventListener('change', function() {
		personsSum = +this.value;
		total = (daysSum + personsSum)*4000;
		// если нет одного из значений то ноль на странице
		if (persons.value == '' || daysSum == 0 || restDays.value == '' || personsSum == 0) {
			totalValue.innerHTML = 0;
		} else {
			let a = total;
			// totalValue.innerHTML = total;
			$('#total').animateNumber({ number: a * place.options[place.selectedIndex].value });
		}
	});

	restDays.addEventListener('change', function() {
		daysSum = +this.value;
		total = (daysSum + personsSum)*4000;
		// если нет одного из значений то ноль на странице
		if (persons.value == '' || daysSum == 0 || restDays.value == '' || personsSum == 0) {
			totalValue.innerHTML = 0;
		} else {
			let a = total;
			// totalValue.innerHTML = total;
			$('#total').animateNumber({ number: a * place.options[place.selectedIndex].value });
		}
	});

	place.addEventListener('change', function() {
		if (persons.value == '' || daysSum == 0 || restDays.value == '' || personsSum == 0) {
			totalValue.innerHTML = 0;
		} else {
			// чтобы при выборе опять страны не было переумножения всего и вся
			let a = total;
			// totalValue.innerHTML = a * this.options[this.selectedIndex].value;
			$('#total').animateNumber({ number: a * place.options[place.selectedIndex].value });
		}
	});


	// запрет ввода + , . e
	for ( let i = 0; i < inputCalc.length; i++) {
		inputCalc[i].oninput = () => {
			inputCalc[i].value = inputCalc[i].value.replace( /[+,.e]/ig , '');
		};
	};
});
