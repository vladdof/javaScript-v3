//ждет пока структура html/css загрузяться, легче чем load
window.addEventListener('DOMContentLoaded', function() {

	let tabs = require('./js/parts/tabs.js');
	let modal = require('./js/parts/modal.js');
	let form = require('./js/parts/ajaxForm.js');
	let slider = require('./js/parts/slider.js');
	let calc = require('./js/parts/calc.js');
	let timer = require('./js/parts/timer.js');

	tabs();
	modal();
	form();
	slider();
	calc();
	timer();
});
