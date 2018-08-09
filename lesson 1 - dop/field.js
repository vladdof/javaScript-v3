var num = 33721;

var numMas = String(num).split('');
console.log(numMas);

var mul = 1;
for (i = 0; i < numMas.length; i++) {
	mul *= (+numMas[i]);
} console.log(mul);

var up = String(Math.pow(mul, 3));
document.write('' + up.slice(0, 2));
// document.write('' + up[0] + up[1]);