let year = new Date().getFullYear();

let actualYearElement = document.getElementById('actualYear');
actualYearElement.textContent = year;  

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

let currentSlide = 0;

function moveSlide(n) {
    const slides = document.querySelectorAll('.carousel-item');
    currentSlide += n;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    updateCarousel();
}

function updateCarousel() {
    const carouselInner = document.querySelector('.carousel-inner');
    const offset = -currentSlide * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
}