import Swiper from "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs";

const mySwiper = new Swiper(".mySwiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  autoplay: {
    delay: 2000,
  },

  slidesPerView: 4,
  spaceBetween: -30,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

export default mySwiper;
