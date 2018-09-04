"use strict";
require("core-js/modules/es6.regexp.replace");

function calc() {
  // калькулятор на сайте
  var persons = document.getElementsByClassName('counter-block-input')[0],
      restDays = document.getElementsByClassName('counter-block-input')[1],
      inputCalc = document.querySelectorAll('.counter-block-input'),
      place = document.getElementById('select'),
      totalValue = document.getElementById("total"),
      personsSum = 0,
      daysSum = 0,
      total = 0; // почему innerHTML, сам говорил, что лучше textContent

  totalValue.innerHTML = 0;
  persons.addEventListener('change', function () {
    personsSum = +this.value;
    total = (daysSum + personsSum) * 4000; // если нет одного из значений то ноль на странице

    if (persons.value == '' || daysSum == 0 || restDays.value == '' || personsSum == 0) {
      totalValue.innerHTML = 0;
    } else {
      var a = total; // totalValue.innerHTML = total;

      $('#total').animateNumber({
        number: a * place.options[place.selectedIndex].value
      });
    }
  });
  restDays.addEventListener('change', function () {
    daysSum = +this.value;
    total = (daysSum + personsSum) * 4000; // если нет одного из значений то ноль на странице

    if (persons.value == '' || daysSum == 0 || restDays.value == '' || personsSum == 0) {
      totalValue.innerHTML = 0;
    } else {
      var a = total; // totalValue.innerHTML = total;

      $('#total').animateNumber({
        number: a * place.options[place.selectedIndex].value
      });
    }
  });
  place.addEventListener('change', function () {
    if (persons.value == '' || daysSum == 0 || restDays.value == '' || personsSum == 0) {
      totalValue.innerHTML = 0;
    } else {
      // чтобы при выборе опять страны не было переумножения всего и вся
      var a = total; // totalValue.innerHTML = a * this.options[this.selectedIndex].value;

      $('#total').animateNumber({
        number: a * place.options[place.selectedIndex].value
      });
    }
  }); // запрет ввода + , . e

  var _loop = function _loop(i) {
    inputCalc[i].oninput = function () {
      inputCalc[i].value = inputCalc[i].value.replace(/[+,.e]/ig, "");
    };
  };

  for (var i = 0; i < inputCalc.length; i++) {
    _loop(i);
  }

  ;
}

module.exports = calc;