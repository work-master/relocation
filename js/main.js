
$(document).ready(function(){

  //Меню
  $('#menu').slicknav({
    label:'МЕНЮ'
  });

  //Главный Слайдер
  $('.main-slider').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    fade: true,
    autoplay: true,
    prevArrow: '<button type="button" class="slick-prev slick-prev_main"> <i class="icon-left-open-big"></i> </button>',
    nextArrow: '<button type="button" class="slick-next slick-next_main"> <i class="icon-right-open-big"></i> </button>',
    responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        dots: false
      }
    }
    ]
  });

  //Галерея
  $('#photoGallery').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]

  });

  //Отзывы слайдер
  $('.reviews__slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]

  });

  //Фотоотчет слайдер
  $('#photoReport').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]

  });

  // Кнопка "Наверх"
  if ( $(window).scrollTop() > 120 ){
    $('#arrow-up').fadeIn('slow');
  }
  $(window).scroll(function(){
    setTimeout(function(){
      if ( $(this).scrollTop() > 120 ){
        $('#arrow-up').fadeIn('slow');
      } else {
        $('#arrow-up').fadeOut('400');
      }
    }, 405);
  });
  $('#arrow-up').on('click', function(){
    $('html, body').animate({scrollTop: 0}, 400);
  });

  //Аккордеон
  $('.accordeon__header').click(function(){
      if(!$(this).hasClass('accordeon__header_active')){  //если "кликнутый" пункт неактивный:
        $('.accordeon__header').removeClass('accordeon__header_active').next('.accordeon__content').slideUp(200); //делаем неактивными все пункты и скрываем все блоки
        $(this).addClass('accordeon__header_active'); //активируем "кликнутый" пункт
        $(this).next('.accordeon__content').slideDown(200); //раскрываем следующий за ним блок с описанием
      } else {  //иначе:
        $(this).removeClass('accordeon__header_active').next('.accordeon__content').slideUp(200);  //скрываем данный пункт
      }
  });

  //Popup Form
  $('#closeButton, #overlay, #callButton').on('click', function(){
    $('#overlay').toggleClass('overlay_active');
    $('#popupForm').toggleClass('popup_active');
  });

  //Стилизация чекбоксов
  $('input[type="checkbox"]').styler();

  //Динамич. счетчик
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

  //Маска телефона
  $('#phone, #phoneNumber').mask("+7(999) 999-9999");
  
});