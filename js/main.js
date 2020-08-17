var menuButton = $(".menu-button");
menuButton.on("click", function () {
  $(".navbar-bottom").toggleClass("navbar-bottom--visible");
});

$(document).ready(function () {
  var tabsItem = $(".trend__header-list-item");
  var contentItem = $(".content-item");

  tabsItem.on("click", function (event) {
    var activeContent = $(this).attr("data-target");
    tabsItem.removeClass("trend__header-list-item--active");
    contentItem.removeClass("content-item--active");
    $(activeContent).addClass("content-item--active");
    $(this).addClass("trend__header-list-item--active");
  });
});

// Слайдер

var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  autoplay: {
    delay: 7000,
  },
});

var newSwiper = new Swiper(".swiper-box", {
  // Optional parameters
  loop: false,
  autoHeight: true,
  // If we need pagination
  updateOnWindowResize: true,
  // width: 200,
  // centeredSlides: true,
  // Navigation arrows
  navigation: {
    // hiddenClass: ".story__slider-button-right",
    // disabledClass: ".story__slider-button-right",
    // lockClass: ".story__slider-button-right",
    nextEl: ".story__slider-button-right",
    prevEl: ".story__slider-button-left",
  },
});

$("form").validate({
  messages: {
    name: "Please specify your name",
    email: {
      required: "We need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com",
    },
  },
});
