//1) Выведите на страницу текущую дату и время в формате '09:59:59 30.05.2018'
let date = new Date(),
	day = date.getDay(),
	month = date.getMonth() + 1,
	year = date.getFullYear(),
//2) Напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры (из 1.6.2018 сделает 01.06.2018)
	fullDate = ('0' + day).slice(-2) + '.' + ('0' + month).slice(-2) + '.' + year,

	hours = date.getHours() + 1,
	minutes = date.getMinutes(),
	seconds = date.getSeconds(),
	fullTime = hours + ':' + minutes + ':' + seconds;

console.log(fullDate + ' ' + fullTime);

console.log(date);

//3) Напишите функцию, которая выводит на страницу текущий день недели на русском языке



//4) Напишите функцию, которая выводит на страницу разницу между двумя датами в количестве дней
let body = document.querySelector('body'),
	inputDate1 = document.createElement("input"),
	inputDate2 = document.createElement("input"),
	inputOut = document.createElement('p');

	body.appendChild(inputDate1);

