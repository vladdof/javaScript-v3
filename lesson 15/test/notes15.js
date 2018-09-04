// describe("Таймер", function(){
// 	it("Возвращает ли функция объект?", function(){
// 		assert.typeOf(getTimeRemaining(), 'object')
// 	});

// 	it("Устанавливаем таймер обратонго отсчета", function(){
// 		assert.typeOf(setClock('timer', deadline), 'string');
// 	});
// 	// проверяем что total = 0 в первночальной позиции
// 	describe('Общая сумма', function() {
// 		it('Изначально равен 0', function(){
// 			assert.equal(total, 0);
// 		});
// 	})
// });


// function sayName(name) {
// 	let message = "My name is " +name;
// 	return message;
// }

// let arr = [5, -3,6,-5,0,-7,8,9];
// let result = arr.reduce(function(sum,elem) {
// 		return sum + elem;
// });

// let assert = require('chai').assert
// //  описание теста
// describe('sayName', function() {
// 	// описывает то что тестирует
// 	it("Получаем фразу с новым именнем", function() {
// 		// вызываем один из методов
// 		assert.typeOf(sayName('Vlad'), 'string');
// 	});
// });

// describe('arr', function() {
// 	// описывает то что тестирует
// 	it("Получаем сумму чисел массива ", function() {
// 		// вызываем один из методов
// 		assert.equal(result, '13');
// 	});
// });


// // Р¤СѓРЅРєС†РёСЏ sum РґРѕР»Р¶РЅР° РІРѕР·РІСЂР°С‰Р°С‚СЊ С‚РёРї РґР°РЅРЅС‹С… true. РџСЂРѕРІРµСЂРёС‚СЊ РµС‘ РЅР° СЌС‚Рѕ.

// function sum(a, b) {
// 	return a + b > 10;
// }
// sum(2,2)

// // РџРµСЂРµРјРµРЅРЅР°СЏ num РґРѕР»Р¶РЅР° Р±С‹С‚СЊ СЂР°РІРЅР° 5. РџСЂРѕРІРµСЂРёС‚СЊ РЅР° СЃРѕРѕС‚РІРµС‚СЃС‚РІРёРµ.

// let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
// let num = arr[1][1];

// // РЈР·РЅР°С‚СЊ, С‡С‚Рѕ РЅР°Рј РІРµСЂРЅРµС‚ С„СѓРЅРєС†РёСЏ each РІ РґР°РЅРЅС‹С… СѓСЃР»РѕРІРёСЏС…. РџСЂРѕРІРµСЂРёС‚СЊ РµС‘ РЅР° С‚РёРї РґР°РЅРЅС‹С…, РєРѕС‚РѕСЂС‹Р№ РѕРЅР° РІРѕР·РІСЂР°С‰Р°РµС‚,
// // РЅР° СЃРѕРѕС‚РІРµС‚СЃС‚РІРёРµ РѕР¶РёРґР°РµРјРѕРјСѓ СЂРµР·СѓР»СЊС‚Р°С‚Сѓ (РєРѕС‚РѕСЂС‹Р№ РІС‹ РїРѕР»СѓС‡РёР»Рё) Рё РЅР° СЃРІРѕР№СЃС‚РІРѕ length.

// var each = function(startArr, f){return f(startArr)};
// var arr = [64, 49, 36, 25, 16];
// var myFunc = function(a){
// 	var newArr = [];
// 	for (var i = 0; i < a.length; i++) {
// 		newArr[i]=Math.sqrt(a[i]);
// 	}
// 	return newArr;
// }
// console.log(each(arr, myFunc));