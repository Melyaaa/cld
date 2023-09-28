// burger

let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.list__element__link');

burger.addEventListener('click', function(){

  burger.classList.toggle('header__burger--active');

  menu.classList.toggle('header__nav--active');

  document.body.classList.toggle('stop-scroll');
})

menuLinks.forEach(function(el){
  el.addEventListener('click', function(){

    burger.classList.remove('header__burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');
  })
})

// Tabs

let tabsBtn = document.querySelectorAll('.how__step');
let tabsItem = document.querySelectorAll('.how__descr__img');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){
      btn.classList.remove('how__step--active');
    });

    e.currentTarget.classList.add('how__step--active');

    tabsItem.forEach(function(element){
      element.classList.remove('how__descr__img--active')
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('how__descr__img--active');
  });
});

// Accordion

new Accordion ('.accordion-container');

// Swiper

const swiper = new Swiper('.swiper-container', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
});

// Header Search

let searchBtn = document.querySelector('.header__search__btn');
let searchBlock = document.querySelector('.header__search-block');
let disableBtn = document.querySelector('.search-block__disable-btn');

searchBtn.addEventListener('click', function(){
  searchBtn.classList.toggle('header__search__btn--disabled');

  searchBlock.classList.toggle('header__search-block--active');
});

disableBtn.addEventListener('click', function(){
  searchBlock.classList.remove('header__search-block--active');

  searchBtn.classList.remove('header__search__btn--disabled');
});
