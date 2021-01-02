import "@fortawesome/fontawesome-free/js/all.js";
import "lazysizes";
import "../sass/main.scss";
import RevealOnScroll from "./modules/RevealOnScroll";
import Gallery from "./modules/Gallery";

///////////////SPINNER-SCRIPT////////////////////////

document.onreadystatechange = setTimeout(function () {
  if (document.readyState !== "complete") {
    document.querySelector("page").style.visibility = "hidden";
    document.querySelector("#spinnerLoader").style.visibility = "visible";
  } else {
    document.querySelector("#spinnerLoader").style.display = "none";
    document.querySelector("page").style.visibility = "visible";
  }
}, 2000);
///////////////////////////////////////////////////////

new RevealOnScroll();

let openNavigation;
document.querySelector(".navigation__button").addEventListener("click", (e) => {
  e.preventDefault;
  if (typeof openNavigation == "undefined") {
    import(/* webpackChunkName: 'openNavigation' */ "./modules/OpenNavigation")
      .then((x) => {
        openNavigation = new x.default();
        setTimeout(openNavigation.toggleMenu(), 20);
      })
      .catch(() => console.log("Something went wrong..."));
  } else {
    OpenNavigation.toggleMenu();
  }
});

new Gallery(
  document.querySelectorAll(".gallery__photo"),
  document.querySelectorAll(".popupGallery__gallery_photo"),
  document.querySelector(".gallery__nav--prev"),
  document.querySelector(".gallery__nav--next")
);

new Gallery(
  document.querySelectorAll(".gallery-1__photo"),
  document.querySelectorAll(".popupGallery-1__gallery_photo"),
  document.querySelector(".gallery-1__nav--prev"),
  document.querySelector(".gallery-1__nav--next")
);

let popUpGallery;
document.querySelector(".gallery__expand").addEventListener("click", (e) => {
  e.preventDefault();
  if (typeof popUpGallery == "undefined") {
    import(/* webpackChunkName: 'popUpGallery' */ "./modules/PopupGallery")
      .then((x) => {
        popUpGallery = new x.default(
          document.querySelectorAll(".gallery__photo"),
          document.querySelectorAll(".popupGallery__gallery_photo"),
          document.querySelector(".popupGallery__gallery"),
          document.querySelector(".popupGallery"),
          document.querySelector(".gallery__expand"),
          document.querySelector(".popupGallery__close"),
          document.querySelector(".popupGallery__nav--next"),
          document.querySelector(".popupGallery__nav--prev")
        );
        setTimeout(() => popUpGallery.expandGallery(), 20);
      })
      .catch(() => console.log("Something went wrong..."));
  } else {
    popUpGallery.expandGallery();
  }
});

let popUpGallery1;
document.querySelector(".gallery-1__expand").addEventListener("click", (e) => {
  e.preventDefault();
  if (typeof popUpGallery1 == "undefined") {
    import(/* webpackChunkName: 'popUpGallery' */ "./modules/PopupGallery")
      .then((x) => {
        popUpGallery1 = new x.default(
          document.querySelectorAll(".gallery-1__photo"),
          document.querySelectorAll(".popupGallery-1__gallery_photo"),
          document.querySelector(".popupGallery-1__gallery"),
          document.querySelector(".popupGallery-1"),
          document.querySelector(".gallery-1__expand"),
          document.querySelector(".popupGallery-1__close"),
          document.querySelector(".popupGallery-1__nav--next"),
          document.querySelector(".popupGallery-1__nav--prev")
        );
        setTimeout(() => popUpGallery1.expandGallery(), 20);
      })
      .catch(() => console.log("Trenutno ni mogoče naložiti galerije..."));
  } else {
    popUpGallery1.expandGallery();
  }
});

new ImgComposition();

var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 20,
});

if (module.hot) {
  module.hot.accept();
}
