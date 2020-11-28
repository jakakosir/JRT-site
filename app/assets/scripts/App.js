import "@fortawesome/fontawesome-free/js/all.js";
import "../sass/main.scss";
import OpenNavigation from "./modules/OpenNavigation";
import RevealOnScroll from "./modules/RevealOnScroll";
import Gallery from "./modules/Gallery";

let openNavigation = new OpenNavigation();
new RevealOnScroll();

new Gallery(
  document.querySelectorAll(".gallery__photo"),
  document.querySelectorAll('.popupGallery__gallery_photo'),
  document.querySelector(".gallery__nav--prev"),
  document.querySelector(".gallery__nav--next")
);



new Gallery(
  document.querySelectorAll(".gallery-1__photo"),
  document.querySelectorAll('.popupGallery-1__gallery_photo'),
  document.querySelector(".gallery-1__nav--prev"),
  document.querySelector(".gallery-1__nav--next")
);

if (module.hot) {
  module.hot.accept();
}
