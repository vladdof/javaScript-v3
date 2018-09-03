// Функция sum должна возвращать тип данных true. Проверить её на это

function sum(a, b) {
	return a + b > 10;
}


// Переменная num должна быть равна 5. Проверить на соответствие

let arR = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
let num = arR[1][1];

// Узнать, что нам вернет функция each в данных условиях. Проверить её на тип данных, который 
// она возвращает, на соответствие ожидаемому результату (который вы получили) и на свойство length
var each = function(startArr, f) {
	return f(startArr)
};
var arr = [64, 49, 36, 25, 16];
var myFunc = function(a){
	var newArr = [];
	for (var i = 0; i < a.length; i++) {
		newArr[i]=Math.sqrt(a[i]);
	}
	return newArr;

}
console.log(each(arr, myFunc));

var a = each(arr, myFunc);
let l = a.length;

console.log(typeof a);
console.log(l);
console.log(a.toString());

let assert = require('chai').assert
describe('sum', function() {
	it("Функция sum должна возвращать true", function() {
		assert.equal(sum(9,2), true);
	});
});

describe('num = 5', function() {
	it("Переменная num должна быть = 5!", function() {
		assert.equal(num, '5');
	});
});

describe("Проверка массива", function() {
	it("Возвращает тип", function(){
		assert.typeOf(a, 'Array');
	});
	it("Проверка на результат", function(){
		assert.equal(each(arr, myFunc).join(""), a.join(""));
	});
	it("Свойство lenght массива ", function(){
		assert.lengthOf(a, l);
	});

})