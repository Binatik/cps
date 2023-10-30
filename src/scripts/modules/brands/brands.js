import Swiper from "swiper";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function brands() {
  new Swiper(".brands__swiper", {
    // Optional parameters
    modules: [Pagination],
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1.25
      },

      576: {
        slidesPerView: 2
      }
    },
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      dynamicMainBullets: 7,
      clickable: true
    },
  });
}

export { brands };
