const ddBtn = document.querySelector('#ddBtn');
const dropdown = document.querySelector('.dropdown');


ddBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (dropdown.style.visibility == 'visible') {
        dropdown.style.visibility = 'hidden';
    } else {
        dropdown.style.visibility = 'visible';
    }
});

document.addEventListener('click', () => {
    dropdown.style.visibility = 'hidden';
});

let currentIndex = 0;
let slides = document.querySelectorAll('.carousel-slide img');
let dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

function updateSlide() {
    let carouselSlide = document.querySelector('.carousel-slide');
    carouselSlide.style.transform = `translateX(${-currentIndex * 800}px)`;

    dots.forEach((dot, idx) => {
        dot.classList.remove('active');
        if (idx === currentIndex) {
            dot.classList.add('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlide();
}

function currentSlide(index) {
    currentIndex = index;
    updateSlide();
}

setInterval(() => {
    nextSlide();
}, 5000);

updateSlide();