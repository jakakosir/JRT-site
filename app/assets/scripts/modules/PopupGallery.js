class PopupGallery {
  constructor(
    photos,
    popupPhotos,
    popupGalleryGallery,
    gallery,
    expandButton,
    closeButton,
    nextButton,
    prevButton,
    expand
  ) {
    //this.injectHTML();
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

  /*  injectHTML() {
    document.querySelector('.page').insertAdjacentHTML(
      "afterbegin",
      `<div class="popupGallery" id="popup">
       <div class="popupGallery__gallery">
        <figure class="popupGallery__gallery_photo">
            <img src="assets/img/pasjaDruzinica.jpg" alt="pasjaDruzinica.jpg"
                class="popupGallery__gallery_photo--image">
            <figcapture class="gallery__photo--capture paragraph">pasja družinica</figcapture>
        </figure>
        <figure class="popupGallery__hidden">
            <img src="assets/img/pasjaDruzinica.jpg" alt="pasjaDruzinica.jpg"
                class="popupGallery__gallery_photo--image">
            <figcapture class="gallery__photo--capture paragraph">pasja družinica</figcapture>
        </figure>
        <figure class="popupGallery__gallery_photo">
            <img src="assets/img/poziram1.jpg" alt="poziram1.jpg" class="popupGallery__gallery_photo--image">
            <figcapture class="popupGallery__gallery_photo--capture paragraph">poziram</figcapture>
        </figure>
        <figure class="popupGallery__gallery_photo">
            <img src="assets/img/fletn.jpg" alt="fletn.jpg" class="popupGallery__gallery_photo--image">
            <figcapture class="popupGallery__gallery_photo--capture paragraph">fletn</figcapture>
        </figure>
        <figure class="popupGallery__gallery_photo">
            <img src="assets/img/trimanje.jpg" alt="trimanje.jpg" class="popupGallery__gallery_photo--image">
            <figcapture class="popupGallery__gallery_photo--capture paragraph">trimanje</figcapture>
        </figure>
        <figure class="popupGallery__gallery_photo">
            <img src="assets/img/kingLivingroom.jpg" alt="kingLivingroom.jpg"
                class="popupGallery__gallery_photo--image">
            <figcapture class="popupGallery__gallery_photo--capture paragraph ">kralj dnevne</figcapture>
        </figure>
        <figure class="popupGallery__gallery_photo">
            <img src="assets/img/lumberjack1.jpg" alt="lumberjack.jpg" class="popupGallery__gallery_photo--image">
            <figcapture class="popupGallery__gallery_photo--capture paragraph">lumberjack</figcapture>
        </figure>
        <figure class="popupGallery__gallery_photo">
            <img src="assets/img/pocitek.jpg" alt="pocitek.jpg" class="popupGallery__gallery_photo--image">
            <figcapture class="popupGallery__gallery_photo--capture paragraph">pocitek</figcapture>
        </figure>
        <a class="gallery__nav popupGallery__nav--prev"><i class="fas fa-chevron-left"></i></a>
        <a class="gallery__nav popupGallery__nav--next"><i class="fas fa-chevron-right"></i></a>
    </div>
    <a class="popupGallery__close"><i class="fas fa-times"></i></a>
</div>`
    );
  } */
}

export default PopupGallery;
