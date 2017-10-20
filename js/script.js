var navMain = document.querySelector('.site-navigation');
var navToggle = document.querySelector('.site-navigation__toggle');

navMain.classList.remove('site-navigation--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('site-navigation--closed')) {
    navMain.classList.remove('site-navigation--closed');
    navMain.classList.add('site-navigation--opened');
  } else {
    navMain.classList.add('site-navigation--closed');
    navMain.classList.remove('site-navigation--opened');
  }
});

var button = document.querySelector('.popular__button');
var popup = document.querySelector('.modal__overlay');
var hairButton = document.querySelector('.catalog__button--hair');
var cartButton = document.querySelector('.catalog__button--cart');
var bigButton = document.querySelector('.catalog__button--bigcart');
// var catalogBtn = document.querySelectorAll('.catalog__button');

button.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (popup.classList.contains('modal--show')) {
      popup.classList.remove('modal--show');
  } else {
      popup.classList.add('modal--show');
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains('modal--show')) {
      popup.classList.remove('modal--show');
    }
  }
});

hairButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (popup.classList.contains('modal--show')) {
      popup.classList.remove('modal--show');
  } else {
      popup.classList.add('modal--show');
  }
});

cartButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (popup.classList.contains('modal--show')) {
      popup.classList.remove('modal--show');
  } else {
      popup.classList.add('modal--show');
  }
});

bigButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (popup.classList.contains('modal--show')) {
      popup.classList.remove('modal--show');
  } else {
      popup.classList.add('modal--show');
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains('modal--show')) {
      popup.classList.remove('modal--show');
    }
  }
});

// catalogBtn.addEventListener('click', function(evt) {
//   evt.preventDefault();
//   if (popup.classList.contains('modal--show')) {
//       popup.classList.remove('modal--show');
//   } else {
//       popup.classList.add('modal--show');
//   }
// });
