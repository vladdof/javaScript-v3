(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// подключили файл
var myModule = require('../parts/second.js');

let myModuleInstance = new myModule();
myModuleInstance.hello();
myModuleInstance.goodbye();
},{"../parts/second.js":2}],2:[function(require,module,exports){
function myModule () {
	this.hello = function() {
		return console.log(`hello`);
	}

	this.goodbye = function () {
		return console.log(`goodbye!`);
	}
}

module.exports = myModule;
},{}]},{},[1]);
