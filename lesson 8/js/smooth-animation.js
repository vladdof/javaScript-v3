//ждет пока структура html/css загрузяться, легче чем load
window.addEventListener('DOMContentLoaded', function() {
	// плавная анимация
	let link = document.querySelectorAll('[href^="#"]');

	for (let i = 0; i < link.length; i++) {
		link[i].addEventListener('click' , function(event) {
			event.preventDefault();
			// где был клик
			let target = event.target.getAttribute('href').slice(1),
				link = document.getElementById(target),
				start = Date.now();

			id = setInterval( function() {
				let t = Date.now() - start;

				if (t > 2000) {
					clearInterval(id);
					return;
				} else {
					window.scrollBy(0,link.getBoundingClientRect().top / 20 - 2);
				}
			}, 20);
		});
	};
});
