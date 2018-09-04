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