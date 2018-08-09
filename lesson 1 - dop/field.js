var num = 33721;

var numMas = String(num).split('');
console.log(numMas);

var mul = 1;
for (i = 0; i < numMas.length; i++) {
	mul *= (+numMas[i]);
	console.log(mul);
}

var up = mul**3;

document.write('<b>' + Math.round( up / 100000 ) + '</b>');

