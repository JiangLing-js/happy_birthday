var images = document.querySelectorAll('.image-slider img');
var current = 0;
var interval = setInterval(nextImage, 3000);

function nextImage() {
  images[current].style.opacity = 0;
  current = (current + 1) % images.length;
  images[current].style.opacity = 1;
}
