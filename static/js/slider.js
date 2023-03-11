var slider = document.querySelector('.slider');
var images = slider.querySelectorAll('img');
var current = 0;
var interval = setInterval(nextImage, 3000);

function nextImage() {
  images[current].style.animation = 'slide-out 1s forwards';
  current = (current + 1) % images.length;
  images[current].style.animation = 'slide-in 1s forwards';
}
