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