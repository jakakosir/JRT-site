import "../sass/main.scss";
import OpenNavigation from "./modules/OpenNavigation";

let openNavigation = new OpenNavigation();

if (module.hot) {
  module.hot.accept();
}
