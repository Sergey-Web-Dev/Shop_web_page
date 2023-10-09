import Swiper from "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs";

const commentsSwiper = new Swiper(".swiperComments", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  autoplay: {
    delay: 2000,
  },

  pagination: {
    el: ".swiper-pagination",
  },
});

export default commentsSwiper;
