//ждет пока структура html/css загрузяться, легче чем load
window.addEventListener('DOMContentLoaded', function() {

	let tabs = require('../parts/tabs.js');
	let modal = require('../parts/modal.js');
	let form = require('../parts/ajaxForm.js');
	let slider = require('../parts/slider.js');
	let calc = require('../parts/calc.js');
	let timer = require('../parts/timer.js');

	tabs();
	modal();
	form();
	slider();
	calc();
	timer();
});