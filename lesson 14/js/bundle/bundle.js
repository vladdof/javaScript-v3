(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
//ждет пока структура html/css загрузяться, легче чем load
window.addEventListener('DOMContentLoaded', function() {

	let tabs = require('../parts/tabs.js');
	let modal = require('../parts/modal.js');
	let form = require('../parts/ajaxForm.js');
	let slider = require('../parts/slider.js');
	let calc = require('../parts/calc.js');
	let timer = require('../parts/timer.js');

	tabs();
	modal();
	form();
	slider();
	calc();
	timer();
});
},{"../parts/ajaxForm.js":23,"../parts/calc.js":24,"../parts/modal.js":25,"../parts/slider.js":26,"../parts/tabs.js":27,"../parts/timer.js":28}],2:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

},{"./_is-object":13}],3:[function(require,module,exports){
var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

},{}],4:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

},{}],5:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_fails":7}],6:[function(require,module,exports){
var isObject = require('./_is-object');
var document = require('./_global').document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

},{"./_global":9,"./_is-object":13}],7:[function(require,module,exports){
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

},{}],8:[function(require,module,exports){
'use strict';
var hide = require('./_hide');
var redefine = require('./_redefine');
var fails = require('./_fails');
var defined = require('./_defined');
var wks = require('./_wks');

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var fns = exec(defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];
  if (fails(function () {
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  })) {
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};

},{"./_defined":4,"./_fails":7,"./_hide":11,"./_redefine":17,"./_wks":21}],9:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

},{}],10:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

},{}],11:[function(require,module,exports){
var dP = require('./_object-dp');
var createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

},{"./_descriptors":5,"./_object-dp":15,"./_property-desc":16}],12:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function () {
  return Object.defineProperty(require('./_dom-create')('div'), 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_descriptors":5,"./_dom-create":6,"./_fails":7}],13:[function(require,module,exports){
module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

},{}],14:[function(require,module,exports){
module.exports = false;

},{}],15:[function(require,module,exports){
var anObject = require('./_an-object');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var toPrimitive = require('./_to-primitive');
var dP = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

},{"./_an-object":2,"./_descriptors":5,"./_ie8-dom-define":12,"./_to-primitive":19}],16:[function(require,module,exports){
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

},{}],17:[function(require,module,exports){
var global = require('./_global');
var hide = require('./_hide');
var has = require('./_has');
var SRC = require('./_uid')('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

require('./_core').inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

},{"./_core":3,"./_global":9,"./_has":10,"./_hide":11,"./_uid":20}],18:[function(require,module,exports){
var core = require('./_core');
var global = require('./_global');
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: require('./_library') ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});

},{"./_core":3,"./_global":9,"./_library":14}],19:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

},{"./_is-object":13}],20:[function(require,module,exports){
var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

},{}],21:[function(require,module,exports){
var store = require('./_shared')('wks');
var uid = require('./_uid');
var Symbol = require('./_global').Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

},{"./_global":9,"./_shared":18,"./_uid":20}],22:[function(require,module,exports){
// @@replace logic
require('./_fix-re-wks')('replace', 2, function (defined, REPLACE, $replace) {
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue) {
    'use strict';
    var O = defined(this);
    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined
      ? fn.call(searchValue, O, replaceValue)
      : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});

},{"./_fix-re-wks":8}],23:[function(require,module,exports){
"use strict";

function form() {
  // form
  var message = new Object();
  message.loading = 'Загрузка...';
  message.success = 'Спасибо! Скоро мы с вами свяжемся';
  message.failure = 'Что-т пошло не так...'; // получили всплывающую форму

  var form = document.getElementsByClassName('main-form')[0],
      input = form.getElementsByTagName('input'),
      // получили форму контакт
  cont_form = document.getElementById('form'),
      cont_input = cont_form.getElementsByTagName('input'),
      // создали уведомление об отправке
  statusMessage = document.createElement('div'); // добавили ему класс

  statusMessage.classList.add('status');
  cont_form.addEventListener('submit', function (event) {
    event.preventDefault();
    cont_form.appendChild(statusMessage);
    var request = new XMLHttpRequest();
    request.open("POST", 'server.php');
    request.setRequestHeader("Content-Type", "application/x-www/form/urlencoded");
    var formData = new FormData(cont_form);
    request.send(formData);

    request.onreadystatechange = function () {
      if (request.readyState < 4) {
        statusMessage.innerHTML = message.loading;
      } else if (request.readyState === 4) {
        if (request.status == 200 && request.status < 300) {
          statusMessage.innerHTML = message.success;
        } else {
          statusMessage.innerHTML = message.failure;
        }
      }
    };

    for (var i = 0; i < cont_input.length; i++) {
      cont_input[i].value = '';
    }
  }); // событие на форму submit (отправка формы)

  form.addEventListener('submit', function (event) {
    // чтобы страница не перезагружалась
    event.preventDefault(); // вставили сообщение

    form.appendChild(statusMessage); // ajax 

    var request = new XMLHttpRequest(); // настройка

    request.open("POST", 'server.php'); // кодировка данных

    request.setRequestHeader("Content-Type", "application/x-www/form/urlencoded"); // получаем данные из input 

    var formData = new FormData(form); // отправляем на сервер данные

    request.send(formData); // статус готовности нашего проекта

    request.onreadystatechange = function () {
      if (request.readyState < 4) {
        statusMessage.innerHTML = message.loading;
      } else if (request.readyState === 4) {
        if (request.status == 200 && request.status < 300) {
          statusMessage.innerHTML = message.success; // можно добавлять контент на страницу. лоадер бар, анимацию и тд

          setTimeout(function () {
            erlay.style.display = 'none';
            more.classList.remove('more-splash');
            document.body.style.overflow = '';
          }, 3000);
        } else {
          statusMessage.innerHTML = message.failure;
        }
      }
    }; // чтобы после отправки поля были пустые


    for (var i = 0; i < input.length; i++) {
      input[i].value = ''; // очищаем поля ввода
    }
  });
}

module.exports = form;
},{}],24:[function(require,module,exports){
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
      totalValue.innerHTML = a * place.options[place.selectedIndex].value;
    }
  });
  restDays.addEventListener('change', function () {
    daysSum = +this.value;
    total = (daysSum + personsSum) * 4000; // если нет одного из значений то ноль на странице

    if (persons.value == '' || daysSum == 0 || restDays.value == '' || personsSum == 0) {
      totalValue.innerHTML = 0;
    } else {
      var a = total; // totalValue.innerHTML = total;
      totalValue.innerHTML = a * place.options[place.selectedIndex].value;
    }
  });
  place.addEventListener('change', function () {
    if (persons.value == '' || daysSum == 0 || restDays.value == '' || personsSum == 0) {
      totalValue.innerHTML = 0;
    } else {
      // чтобы при выборе опять страны не было переумножения всего и вся
      var a = total; // totalValue.innerHTML = a * this.options[this.selectedIndex].value;
      totalValue.innerHTML = a * place.options[place.selectedIndex].value;
    }
  }); 
  // запрет ввода + , . e
  var _loop = function _loop(i) {
    inputCalc[i].oninput = function () {
      inputCalc[i].value = inputCalc[i].value.replace(/[^0-9]/gi,'').replace(/\s+/gi,', ');
    };
  };

  for (var i = 0; i < inputCalc.length; i++) {
    _loop(i);
  }

  ;
}

module.exports = calc;
},{"core-js/modules/es6.regexp.replace":22}],25:[function(require,module,exports){
"use strict";

function modal() {
  // modal 
  var more = document.querySelector('.more'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close');
  more.addEventListener('click', function () {
    this.classList.add('more-splash');
    overlay.style.display = 'block'; //нельзя прокручивать страницу, при открытом окне

    document.body.style.overflow = 'hidden';
  });
  close.addEventListener('click', function () {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
  }); //привязываем модальное окно к табам

  var more_tab = document.querySelectorAll('.description-btn');

  for (var i = 0; i < more_tab.length; i++) {
    more_tab[i].addEventListener('click', function () {
      this.classList.add('more-splash');
      overlay.style.display = 'block';
      document.body.style.overflow = 'hidden';
    });
  }
}

module.exports = modal;
},{}],26:[function(require,module,exports){
"use strict";

function slider() {
  // слайдер 
  // показываться будет первый
  var slideIndex = 1,
      slides = document.getElementsByClassName('slider-item'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next'),
      // блок с точками
  dotsWrap = document.querySelector('.slider-dots'),
      dots = document.getElementsByClassName('dot');
  showSlides(slideIndex); // чтобы показывал первый слайд
  // функция показа первого слайда

  function showSlides(n) {
    if (n > slides.length) {
      // чтобы вернуться к первому слайду после прокрутки до последнего
      slideIndex = 1;
    }

    ;

    if (n < 1) {
      slideIndex = slides.length;
    }

    ; // скрыть все слайды, показывая только нужный

    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    } // скрыть все активные точки


    for (var _i = 0; _i < dots.length; _i++) {
      dots[_i].classList.remove('dot-active');
    } // получаем первый слайд // slideIndex - 1 каждый массив идет с нуля


    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');
  }

  ; // добавляет или удаляет количество слайдов

  function plusSlides(n) {
    showSlides(slideIndex += n);
  } // найти какой слайд работает


  function currentSlide(n) {
    showSlides(slideIndex = n);
  } // стрелки 


  prev.addEventListener('click', function () {
    plusSlides(-1);
  });
  next.addEventListener('click', function () {
    plusSlides(1);
  }); // прием делигирования клик на обертку

  dotsWrap.addEventListener('click', function (event) {
    var target = event.target;
    console.log(target);

    for (var i = 0; i < dots.length + 1; i++) {
      // почему +1 ?
      if (target.classList.contains('dot') && target == dots[i - 1]) {
        currentSlide(i);
      }
    }
  });
}

module.exports = slider;
},{}],27:[function(require,module,exports){
"use strict";

function tabs() {
  var tab = document.getElementsByClassName('info-header-tab'),
      tabContent = document.getElementsByClassName('info-tabcontent'),
      info = document.getElementsByClassName('info-header')[0]; //все скроем и покажем только первый таб

  function hideTabContent(a) {
    //цикл проверяет количество контекта и присваивает класс hide
    for (var i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  } //передаем при загрузке страницы, что 1таб будет показан


  hideTabContent(1); //функция показана табов

  function showTabContent(b) {
    //проверяем наличие класса hide
    if (tabContent[b].classList.contains('hide')) {
      //скрываем все табы
      hideTabContent(0); //у выбранного контекта выполняем действия

      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  } //делигируем события для табов и вешаем обработчик


  info.addEventListener('click', function (event) {
    var target = event.target;

    if (target.className == 'info-header-tab') {
      for (var i = 0; i < tab.length; i++) {
        //проверка на какой именно таб кликнули
        if (target == tab[i]) {
          //показываем таб
          showTabContent(i); //если это уже произошло то выходим из цикла

          break;
        }
      }
    }

    ;
  });
}

module.exports = tabs;
},{}],28:[function(require,module,exports){
"use strict";

function timer() {
  //timer 
  var deadline = '2018-08-23';

  function getTimeRemaining(endtime) {
    //переменная разницы между текущей и дедлайном
    var t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor(t / 1000 % 60),
        minutes = Math.floor(t / 1000 / 60 % 60),
        hours = Math.floor(t / (1000 * 60 * 60)); //Необходимо подставлять 0 перед значениями, 

    if (hours < 10) {
      hours = "0" + hours;
    }

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  ; //запуск часов

  function setClock(id, endtime) {
    var timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds');

    function updateClock() {
      var t = getTimeRemaining(endtime); //чтобы в таком случае выводилось: 00:00:00 и все скрипты оставались рабочими

      if (Date.parse(endtime) < Date.parse(new Date())) {
        hours.innerHTML = '00';
        minutes.innerHTML = '00';
        seconds.innerHTML = '00';
        return;
      } else {
        hours.innerHTML = t.hours;
        minutes.innerHTML = t.minutes;
        seconds.innerHTML = t.seconds;
      } //когда остановится таймер


      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }

    ;
    updateClock();
    var timeInterval = setInterval(updateClock, 1000);
  }

  ;
  setClock('timer', deadline);
}

module.exports = timer;
},{}]},{},[1]);
