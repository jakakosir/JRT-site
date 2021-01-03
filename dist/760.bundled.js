(self.webpackChunkbilly = self.webpackChunkbilly || []).push([
  [760],
  {
    650: (t, s, e) => {
      "use strict";
      e.r(s), e.d(s, { default: () => o });
      const o = class {
        constructor(t, s, e, o, h, l, p, i) {
          (this.photos = t),
            (this.photoIndex = 1),
            (this.popupPhotos = s),
            (this.popupGalleryGallery = e),
            (this.gallery = o),
            (this.expandButton = h),
            (this.closeButton = l),
            (this.nextButton = p),
            (this.prevButton = i),
            this.events();
        }
        events() {
          this.prevButton.addEventListener("click", () => this.changePhoto(-1)),
            this.nextButton.addEventListener("click", () =>
              this.changePhoto(1)
            ),
            this.expandButton.addEventListener("click", () => {
              this.expandGallery();
            }),
            this.closeButton.addEventListener("click", () => {
              this.closeGallery();
            });
        }
        expandGallery() {
          this.gallery.classList.add("popupGallery--opened"),
            this.popupGalleryGallery.classList.add(
              "popupGallery__gallery--opened"
            );
        }
        closeGallery() {
          this.gallery.classList.remove("popupGallery--opened"),
            this.popupGalleryGallery.classList.remove(
              "popupGallery__gallery--opened"
            );
        }
        photoSlides(t) {
          let s;
          for (
            t > this.photos.length && (this.photoIndex = 1),
              t < 1 && (this.photoIndex = this.photos.length),
              s = 0;
            s < this.photos.length;
            s++
          )
            this.photos[s].style.display = "none";
          for (
            this.photos[this.photoIndex - 1].style.display = "block",
              t > this.popupPhotos.length && (this.photoIndex = 1),
              t < 1 && (this.photoIndex = this.popupPhotos.length),
              s = 0;
            s < this.popupPhotos.length;
            s++
          )
            this.popupPhotos[s].style.display = "none";
          this.popupPhotos[this.photoIndex - 1].style.display = "block";
        }
        changePhoto(t) {
          this.photoSlides((this.photoIndex = this.photoIndex + t));
        }
      };
    },
  },
]);
