// var menuButton = $(".menu-button");
// menuButton.on("click", function () {
//   $(".navbar-bottom").toggleClass("navbar-bottom--visible");
// });

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

var modalButton = $("[data-toggle=modal]");
var closeModalButton = $(".modal__close");
modalButton.on("click", openModal);
closeModalButton.on("click", closeModal);
function openModal() {
  var modalDialog = $(".modal__dialog");
  modalDialog.addClass("modal__dialog--visible");
}
function closeModal(event) {
  event.preventDefault();
  var modalDialog = $(".modal__dialog");
  modalDialog.removeClass("modal__dialog--visible");
}
$(document).keyup(function (e) {
  if (e.keyCode == 27) {
    var modalDialog = $(".modal__dialog");
    modalDialog.removeClass("modal__dialog--visible");
  }
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

$.validator.methods.email = function (value, element) {
  return this.optional(element) || /[a-z]+@[a-z]+\.[a-z]+/.test(value);
};
$("form").validate({
  messages: {
    name: "Please specify your name",
    email: {
      required: "We need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com",
    },
  },
});

// $(".form").each(function () {
//   $(this).validate({
//     errorClass: "invalid",
//     messages: {
//       email: {
//         required: "Email is required",
//       },
//     },
//   });
// });
