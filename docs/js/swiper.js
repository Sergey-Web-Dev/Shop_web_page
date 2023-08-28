import Swiper from "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs";

const swiperBanner = new Swiper(".swiperBanner", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 2000,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

export default swiperBanner;
