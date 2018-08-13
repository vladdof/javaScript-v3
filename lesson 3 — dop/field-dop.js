//Сделать так, чтобы строка начиналась с большой буквы
let str = "урок-3-был слишком легким";
str = str.charAt(0).toUpperCase() + str.slice(1);

console.log(str);

//Теперь замените все “-” на пробелы

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


