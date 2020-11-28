import throttle from "lodash/throttle";
import debounce from "lodash/debounce";

class ReveallOnScroll {
  constructor() {
    this.parToRev = document.querySelectorAll(".reveal");
    this.browserHight = window.innerHeight;
    this.hideInitially();
    this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
    this.events();
  }

  events() {
    window.addEventListener("scroll", this.scrollThrottle);
    window.addEventListener(
      "resize",
      debounce(() => {
        console.log("resize just ran");
        this.browserHight = window.innerHeight;
      }, 333)
    );
  }

  calcCaller() {
    console.log("scroll function run");
    this.parToRev.forEach((e) => {
      if (e.isRevealed == false) {
        this.calculateIfScrolledTo(e);
      }
    });
  }

  calculateIfScrolledTo(e) {
    if (window.scrollY + this.browserHight > e.offsetTop) {
      console.log("element was calculated");
      let scrollPercent =
        (e.getBoundingClientRect().top / this.browserHight) * 100;
      if (scrollPercent < 95) {
        e.classList.add("reveal-par--is-visible");
        e.isRevealed = true;
        if (e.isLastItem) {
          window.removeEventListener("scroll", this.scrollThrottle);
        }
      }
    }
  }

  hideInitially() {
    this.parToRev.forEach((e) => {
      e.classList.add("reveal-par");
      e.isRevealed = false;
    });
    this.parToRev[this.parToRev.length - 1].isLastItem = true;
  }
}

export default ReveallOnScroll;
