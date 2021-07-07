let burger = document.querySelector('.burger');
let menu = document.querySelector('.menu');


burger.addEventListener('click', function() {
  this.classList.toggle('active');
  menu.classList.toggle('_active');

});