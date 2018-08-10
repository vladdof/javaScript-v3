//первая часть задания
var week = [
	"Понедельник", 
	"Вторник", 
	"Среда", 
	"Четверг", 
	"Пятница",
	"Суббота",
	"Воскресенье"
];

//c текущей датой через эту переменную не справился
// var date = new Date(); 
// var now = date.getDay();

console.log(week);

for (let i = 0; i < week.length; i++) {

	if (i == (week.length - 1) || i == (week.length - 2)) {
		document.write("<b>" + week[i] + "</b>" + "<br>");

	} else if (week[i] == "Пятница") {
		document.write("<i>" + week[i] + "</i>" + "<br>");

	} else {
		document.write(week[i] + "<br>");
	}
};


//вторая часть задания
var arr = [
	"164",
	"71573",
	"1789653",
	"272789",
	"33579",
	"2437",
	"33789752"
];
console.log(arr);

for (let i = 0; i < arr.length; i++) {

	if (arr[i].charAt(0) == 3 || arr[i].charAt(0) == 7) {
		console.log(arr[i]);
	} 
}


