
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


