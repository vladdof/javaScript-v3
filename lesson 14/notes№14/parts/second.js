// function myModule () {
// 	this.hello = function() {
// 		return console.log(`hello`);
// 	}

// 	this.goodbye = function () {
// 		return console.log(`goodbye!`);
// 	}
// }

// module.exports = myModule;

// для примера экспорта // этот формат для бабеля и webpack
export let one = 1;

let two = 2;
// 
export {two};

export function cons() {
	console.log(1);
}