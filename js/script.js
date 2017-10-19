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
var popup = document.querySelector('.modal');

button.addEventListener('click', function(evt) {
	evt.preventDefolt();
	popup.classList.add('modal--show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains('modal-show')) {
      mapPopup.classList.remove('modal-show');
    }
  }
});
