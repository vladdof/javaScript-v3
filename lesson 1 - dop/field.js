var num = 33721;
//функционал короче и элегантнее
//split(" ") разделяет пробелами
// var numMas = eval(num.toString().split("").join("*"));
var numMas = String(num).split('');
console.log(numMas);

var mul = 1;
for (i = 0; i < numMas.length; i++) {
	mul *= (+numMas[i]);
} console.log(mul);

var up = String(Math.pow(numMas, 3));
document.write('' + up.slice(0, 2));
// document.write('' + up[0] + up[1]);
