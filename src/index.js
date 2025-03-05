// Utility function to toggle modal visibility
function toggleModal(modalSelector, containerSelector) {
  const modal = document.querySelector(modalSelector);
  const container = document.querySelector(containerSelector);
  modal.classList.toggle('is-open');
  if (container) {
    container.scrollIntoView({ behavior: 'smooth' });
  }
}

// Header hamburger menu
const menuButton = document.querySelector('.menu-open-btn');
const menuBackdrop = document.querySelector('.hamburger-menu');
menuButton.addEventListener('click', () => toggleModal('.hamburger-menu'));
menuBackdrop.addEventListener('click', e => {
  if (e.target.closest('.menu-close-btn')) {
    toggleModal('.hamburger-menu');
  }
});

// Add event listeners to menu links
const menuLinks = document.querySelectorAll('.hamburger-menu a');
menuLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
      toggleModal('.hamburger-menu');
    }
  });
});

// Buy Now modal window
const buyButton = document.querySelector('.buy-now-btn.mobile-btn');
const buyTabletButton = document.querySelector('.buy-now-btn.tablet-btn');
const buyBackdrop = document.querySelector('.modal-buy-now');
buyButton.addEventListener('click', () => toggleModal('.modal-buy-now'));
buyTabletButton.addEventListener('click', () => toggleModal('.modal-buy-now'));
buyBackdrop.addEventListener('click', e => {
  if (e.target.closest('.modal-buy-now-menu-close-btn') || e.target.closest('.menu-close-btn')) {
    toggleModal('.modal-buy-now');
  }
});

// Franchise modal window
const franchiseButton = document.querySelector('.franchise-btn');
const franchiseBackdrop = document.querySelector('.franchise');
franchiseButton.addEventListener('click', () => toggleModal('.franchise', '.contact-container'));
franchiseBackdrop.addEventListener('click', e => {
  if (e.target.closest('.modal-close-btn-contacts')) {
    toggleModal('.franchise', '.contact-container');
  }
});

// Location modal window
const locationButton = document.querySelector('.location-btn');
const locationBackdrop = document.querySelector('.location');
locationButton.addEventListener('click', () => toggleModal('.location', '.contact-container'));
locationBackdrop.addEventListener('click', e => {
  if (e.target.closest('.modal-close-btn-contacts')) {
    toggleModal('.location', '.contact-container');
  }
});

// About section modal window
const aboutButton = document.querySelector('.read-more-btn');
const aboutBackdrop = document.querySelector('.modal-box');
aboutButton.addEventListener('click', () => toggleModal('.modal-box', '.about-container-box'));
aboutBackdrop.addEventListener('click', e => {
  if (e.target.closest('.close-modal-box')) {
    toggleModal('.modal-box', '.about-container-box');
  }
});

// Products ingredients modal window
const ingredientsButtons = document.querySelectorAll('.product-card-arrow-button');
const ingredientsBackdrop = document.querySelector('.modal-window-ingredients');
ingredientsButtons.forEach(button => {
  button.addEventListener('click', () => toggleModal('.modal-window-ingredients'));
});
ingredientsBackdrop.addEventListener('click', e => {
  if (e.target.closest('.modal-close-button') || e.target.closest('.modal-window-ingredients-submit-button')) {
    toggleModal('.modal-window-ingredients');
  }
});

// Customer Review JS
document.addEventListener('DOMContentLoaded', () => {
  let currentSlideIndex = 0; 
  const slides = document.querySelectorAll('.carousel-item');
  const dots = document.querySelectorAll('.dot');

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
      dots[i].classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
  }

  function prevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    showSlide(currentSlideIndex);
  }

  function goToSlide(index) {
    currentSlideIndex = index;
    showSlide(currentSlideIndex);
  }

  showSlide(currentSlideIndex);

  document.querySelector('.prev-btn').addEventListener('click', prevSlide);
  document.querySelector('.next-btn').addEventListener('click', nextSlide);
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => goToSlide(index));
  });
});