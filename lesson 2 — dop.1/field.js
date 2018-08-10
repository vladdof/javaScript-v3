var week = [
	"Понедельник", 
	"Вторник", 
	"Среда", 
	"Четверг", 
	"Пятница",
	"Суббота",
	"Воскресенье"
];

console.log(week);

for (let i = 0; i < week.length; i++) {

	if (i == (week.length - 1) || i == (week.length - 2)) {
		document.write("<b>" + week[i] + "</b>" + "<br>");

	} else if (week[i] == "Четверг") {
		document.write("<i>" + week[i] + "</i>" + "<br>");

	} else {
		document.write(week[i] + "<br>");
	}
}