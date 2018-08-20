//1) Выведите на страницу текущую дату и время в формате '09:59:59 30.05.2018'
let date = new Date(),
	day = date.getDate(),
	month = date.getMonth() + 1,
	year = date.getFullYear(),
//2) Напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры (из 1.6.2018 сделает 01.06.2018)
	fullDate = ('0' + day).slice(-2) + '.' + ('0' + month).slice(-2) + '.' + year,

	hours = date.getHours() + 1,
	minutes = date.getMinutes(),
	seconds = date.getSeconds(),
	fullTime = ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2);

// document.write(date.toLocaleString());
document.write("Текущая дата и время — " + "<b>" + fullTime + ' ' + fullDate + "</b>" + '<br>');

//3) Напишите функцию, которая выводит на страницу текущий день недели на русском языке
let	dayWeek = date.getDay() - 1,
	week = [
	"Понедельник", 
	"Вторник", 
	"Среда", 
	"Четверг", 
	"Пятница",
	"Суббота",
	"Воскресенье"
];
document.write("Текущий день недели — " + "<b>" + week[dayWeek] + "</b>" + '<br>');
//еще вариант
// document.write( date.toLocaleString('ru', {weekday: 'short'}) ); // 'сб'

//4) Напишите функцию, которая выводит на страницу разницу между двумя датами в количестве дней
let body = document.querySelector('body'),
	inputDate1 = document.createElement("input"),
	inputDate2 = document.createElement("input"),
	inputOut = document.createElement('p'),
	btn = document.createElement('button'),
	text = document.createElement('p');

	body.appendChild(inputDate1);
	body.appendChild(inputDate2);
	body.appendChild(inputOut);
	body.appendChild(btn);
	body.insertBefore(text, inputDate1);

	text.textContent = "Введите дату в формате: день.месяц.год";
	text.style.marginTop = "50px";
	text.style.marginBottom = "20px";
	inputDate1.style.marginRight = "20px";
	inputDate1.type = 'date';
	inputDate2.type = 'date';

	btn.textContent = "Рассчитать разницу";

let date1,
	date2;

btn.addEventListener('click', function() {

	date1 = inputDate1.value;
	date2 = inputDate2.value;

	let	date_1 = new Date(date1),
		date_2 = new Date(date2),
		minus = Math.floor(Math.abs(date_1 - date_2)/86400000);

	console.log(date_2.toLocaleDateString());
	console.log(date_1.toLocaleDateString());

	inputOut.textContent = "Разница между датами — " + minus + " дней";

});
