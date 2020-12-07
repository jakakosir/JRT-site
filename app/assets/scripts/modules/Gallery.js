class Gallery {
  constructor(photos, popupPhotos, prevButton, nextButton) {
    this.photoIndex = 1;
    this.photos = photos;
    this.popupPhotos = popupPhotos;
    this.prevButton = prevButton;
    this.nextButton = nextButton;
    this.photoSlides(this.photoIndex);
    this.events();
  }

  events() {
    this.prevButton.addEventListener("click", () => this.changePhoto(-1));
    this.nextButton.addEventListener("click", () => this.changePhoto(1));
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

export default Gallery;
