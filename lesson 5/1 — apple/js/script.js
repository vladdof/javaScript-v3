//1 Восстановить порядок в меню, добавить пятый пункт

//2 Заменить картинку заднего фона на другую из папки img

//3 Поменять заголовок, добавить слово "подлинную"

//4 Удалить рекламу со страницы

//5 Спросить у пользователя отношение к технике apple и записать ответ в поле "prompt"

let menu = document.querySelector('.menu'),
	item = document.querySelectorAll('.menu-item'),
	body = document.querySelector('body'),
	title = document.querySelector('.title'),
	promo = document.querySelector('.adv'),
	answer = document.querySelector('.prompt'),
	alert;

//1
menu.insertBefore(item[1], item[3]);

let li_5 = document.createElement("li");
li_5.classList.add("menu-item");
li_5.textContent = "Пятый пункт";
menu.appendChild(li_5);




//2
body.style.background = 'url(../img/apple_true.jpg) center no-repeat';

//3
title.textContent = "Подлинную технику Apple";

//4 promo.style.display = "none";
	promo.remove();

//5
window.onload = function () {
	alert = prompt("Какое ваше отношение к технике Apple?", "Хорошее или плохое - напишите, что Вам подходит");
	answer.textContent = alert;
}
