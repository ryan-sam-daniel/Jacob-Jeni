let currentIndex = 0;

function showSlide(index) {
  const carouselImages = document.querySelector('.carousel-images');
  const totalImages = carouselImages.children.length;
  if (index >= totalImages) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalImages - 1;
  } else {
    currentIndex = index;
  }
  const offset = -currentIndex * 100;
  carouselImages.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

// Initialize carousel
showSlide(0);
