import Gallery from "./Gallery";

class PopUpGallery extends Gallery() {
  constructor(popUpPhotos) {
    this.popUpPhotos = popUpPhotos;
  }

  popUpPhotoSlides(n) {
    let i;
    if (n > this.popUpPhotos.length) {
      this.photoIndex = 1;
    }
    if (n < 1) {
      this.photoIndex = this.popUpPhotos.length;
    }
    for (i = 0; i < this.popUpPhotos.length; i++) {
      this.popUpPhotos[i].style.display = "none";
    }
    this.popUpPhotos[this.photoIndex - 1].style.display = "block";
  }
  changePhoto(n) {
    this.popUpPhotoSlides((this.photoIndex = this.photoIndex + n));
  }
}

export default PopUpGallery;
