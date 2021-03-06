class OpenNavigation {
  constructor() {
    this.navBackground = document.getElementById("background");
    this.navMenu = document.getElementById("menu");
    this.menBar2 = document.getElementById("bar2");
    this.menBar1 = document.getElementById("bar1");
    this.menBar3 = document.getElementById("bar3");
    this.navButton = document.querySelector(".navigation__button");
    this.navLink = Array.from(
      document.querySelectorAll(".menu__list_listItem")
    );
    this.events();
  }

  events() {
    this.navButton.addEventListener("click", () => this.toggleMenu());
    this.navLink.forEach((e) =>
      e.addEventListener("click", () => this.toggleMenu())
    );
  }

  toggleMenu() {
    this.navBackground.classList.toggle("navigation__background_triggered");
    this.navMenu.classList.toggle("menu__list_triggered");
    this.menBar2.classList.toggle("navigation__button_icon-triggered");
    this.menBar1.classList.toggle("navigation__button_icon--1-triggered");
    this.menBar3.classList.toggle("navigation__button_icon--3-triggered");
  }
}

export default OpenNavigation;
