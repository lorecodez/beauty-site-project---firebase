var swiper = new Swiper(".slide_content ", {
  slidesPerView: 3,
  spaceBetween: 30,
  observer: true,
  observerParents: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
const swiper = document.querySelector('.slide_content ').swiper;


swiper.slideNext();

