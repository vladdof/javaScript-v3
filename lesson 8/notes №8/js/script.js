let box = document.querySelector('.box'),
//находим высоту и ширину нашего элемента/ видимый контент offsetWidth
	width = box.clientWidth,
	height = box.clientHeight
	btn = document.getElementsByTagName('button')[0];
// btn.onclick = function() {
// 	// box.style.height = box.scrollHeight + 'px'; //scrollHeight измеряется просто в единицах
// 	console.log(box.scrollTop);
// }
// console.log(box.getBoundingClientRect()); //параметры элемента

//поговорим о документе
console.log(document.documentElement.clientWidth);
console.log(document.documentElement.scrollTop);

//скролит нашу страницу на заданные координаты относительно осей  (х y)
window.scrollBy(0,0);
//скролит нашу страницу к заданным координатам (х y)
window.scrollTo(0,200);
