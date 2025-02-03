"use strict";
const header = document.querySelector('header');
const initialHeight = 200;
const minHeight = 100;

window.addEventListener('scroll', () => {

  const scrollAmount = window.scrollY;
  const maxShrink = initialHeight - minHeight;
  const newHeight = Math.max(minHeight, initialHeight - scrollAmount);

  if (header.style.height !== `${newHeight}px`) {
    header.style.height = `${newHeight}px`;
  }
});

header.style.transition = 'height 0.3s ease';



const track = document.querySelector('.gallery-scroll');
const slides = Array.from(track.children);
const nextButton = document.querySelector('#next');
const prevButton = document.querySelector('#previous');

let currentSlideIndex = 0;

function updateGallery() {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${currentSlideIndex * slideWidth}px)`;
}

nextButton.addEventListener('click', () => {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  updateGallery();
});

prevButton.addEventListener('click', () => {
  currentSlideIndex =
    (currentSlideIndex - 1 + slides.length) % slides.length;
  updateGallery();
});

updateGallery();