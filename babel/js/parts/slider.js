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