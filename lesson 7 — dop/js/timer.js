window.addEventListener('DOMContentLoaded', function() {

	let timerId = setTimeout(timers, 1000);

	function timers() {
		let date = new Date(),
			hours = date.getHours() + 1,
			minutes = date.getMinutes(),
			seconds = date.getSeconds(),
			timer,
			time_p = document.querySelector('.time');

		if ( hours < 10 ) {
			hours = "0" + hours;
		}
		if ( minutes < 10 ) {
			minutes = '0' + minutes;
		}
		if ( seconds < 10 ) {
			seconds = '0' + seconds;
		}

		timer = hours + ' : ' + minutes + ' : ' + seconds;

		time_p.textContent = timer;

		timerId = setTimeout(timers, 1000);
	}


	//анимация через requestAnimationFrame
	let btn = document.querySelector('button');
	

	function animate(draw, duration) {
		let start = Date.now();

		requestAnimationFrame( function animate(time) {

			let timePassed = Date.now() - start;

			if ( timePassed > duration ) {
				timePassed = duration;
			}

			draw(timePassed);

			if ( timePassed < duration ) {
				requestAnimationFrame(animate);
			}
		});
	};

	btn.addEventListener('click', function() {
		let p = document.querySelector('.time');

		animate(
			function(timePassed) {
				p.style.fontSize = timePassed / 10 + 'px';
				p.style.color = "purple";
			}, 2000);
	});

});






