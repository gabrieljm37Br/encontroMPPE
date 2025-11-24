// Presentation navigation and control
let currentSlide = 1;
const totalSlides = 12;

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const currentSlideEl = document.getElementById('currentSlide');
const progressFill = document.getElementById('progressFill');

function updateSlide(newSlide) {
    if (newSlide < 1 || newSlide > totalSlides) return;

    const slides = document.querySelectorAll('.slide');
    const oldSlide = currentSlide;

    slides[oldSlide - 1].classList.remove('active');
    slides[oldSlide - 1].classList.add(newSlide > oldSlide ? 'prev' : '');

    setTimeout(() => {
        slides[oldSlide - 1].classList.remove('prev');
    }, 500);

    slides[newSlide - 1].classList.add('active');

    currentSlide = newSlide;
    currentSlideEl.textContent = currentSlide;

    const progress = (currentSlide / totalSlides) * 100;
    progressFill.style.width = `${progress}%`;

    prevBtn.disabled = currentSlide === 1;
    nextBtn.disabled = currentSlide === totalSlides;
}

prevBtn.addEventListener('click', () => {
    updateSlide(currentSlide - 1);
});

nextBtn.addEventListener('click', () => {
    updateSlide(currentSlide + 1);
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        updateSlide(currentSlide - 1);
    } else if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        updateSlide(currentSlide + 1);
    } else if (e.key === 'Home') {
        updateSlide(1);
    } else if (e.key === 'End') {
        updateSlide(totalSlides);
    }
});

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
        updateSlide(currentSlide + 1);
    }
    if (touchEndX > touchStartX + 50) {
        updateSlide(currentSlide - 1);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    prevBtn.disabled = true;
    const totalSlidesEl = document.getElementById('totalSlides');
    totalSlidesEl.textContent = totalSlides;
});
