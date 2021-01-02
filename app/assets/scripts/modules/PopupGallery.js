class PopupGallery {
  constructor(
    photos,
    popupPhotos,
    popupGalleryGallery,
    gallery,
    expandButton,
    closeButton,
    nextButton,
    prevButton
  ) {
    this.photos = photos;
    this.photoIndex = 1;
    this.popupPhotos = popupPhotos;
    this.popupGalleryGallery = popupGalleryGallery;
    this.gallery = gallery;
    this.expandButton = expandButton;
    this.closeButton = closeButton;
    this.nextButton = nextButton;
    this.prevButton = prevButton;

    this.events();
  }

  events() {
    this.prevButton.addEventListener("click", () => this.changePhoto(-1));
    this.nextButton.addEventListener("click", () => this.changePhoto(1));
    this.expandButton.addEventListener("click", () => {
      this.expandGallery();
    });
    this.closeButton.addEventListener("click", () => {
      this.closeGallery();
    });
  }

  expandGallery() {
    this.gallery.classList.add("popupGallery--opened");
    this.popupGalleryGallery.classList.add("popupGallery__gallery--opened");
  }

  closeGallery() {
    this.gallery.classList.remove("popupGallery--opened");
    this.popupGalleryGallery.classList.remove("popupGallery__gallery--opened");
  }

  photoSlides(n) {
    let i;
    //GALLERY**********************************
    if (n > this.photos.length) {
      this.photoIndex = 1;
    }
    if (n < 1) {
      this.photoIndex = this.photos.length;
    }
    for (i = 0; i < this.photos.length; i++) {
      this.photos[i].style.display = "none";
    }
    this.photos[this.photoIndex - 1].style.display = "block";

    //POPUP GALLERY**********************************
    if (n > this.popupPhotos.length) {
      this.photoIndex = 1;
    }
    if (n < 1) {
      this.photoIndex = this.popupPhotos.length;
    }
    for (i = 0; i < this.popupPhotos.length; i++) {
      this.popupPhotos[i].style.display = "none";
    }
    this.popupPhotos[this.photoIndex - 1].style.display = "block";
  }

  changePhoto(n) {
    this.photoSlides((this.photoIndex = this.photoIndex + n));
  }
}

export default PopupGallery;
