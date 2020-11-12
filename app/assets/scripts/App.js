import "../sass/main.scss";
import OpenNavigation from "./modules/OpenNavigation";
import RevealOnScroll from "./modules/RevealOnScroll";

let revealOnScroll = new RevealOnScroll();
let openNavigation = new OpenNavigation();


if (module.hot) {
  module.hot.accept();
}
