"use strict";

document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopButton = document.createElement('div');
    scrollToTopButton.classList.add('scroll-to-top');


    scrollToTopButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M12 19V5l-7 7" stroke="#FFFDF6" stroke-width="2" fill="none"/>
      <path d="M12 5l7 7" stroke="#FFFDF6" stroke-width="2" fill="none"/>
    </svg>
  `;


    document.body.appendChild(scrollToTopButton);

    const toggleScrollButton = () => {
        if (window.scrollY > 300) {
            scrollToTopButton.classList.add('show');
        } else {
            scrollToTopButton.classList.remove('show');
        }
    };

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', toggleScrollButton);
});


function showContent(jaar) {
    const content = document.querySelectorAll('.jaar-content');

    content.forEach(c => {
        if (c.id === `content-${jaar}`) {
            c.style.display = 'block';
        }
        else {
            c.style.display = 'none';
        }
    });
}

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