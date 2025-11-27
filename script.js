// Presentation navigation and control
let currentSlide = 1;
const totalSlides = 12;

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const currentSlideEl = document.getElementById('currentSlide');
const progressFill = document.getElementById('progressFill');
const zoomInBtn = document.getElementById('zoomInBtn');
const zoomOutBtn = document.getElementById('zoomOutBtn');
const zoomValueEl = document.getElementById('zoomValue');

function updateSlide(newSlide) {
    // Circular navigation: wrap around if out of bounds
    if (newSlide < 1) {
        newSlide = totalSlides;
    } else if (newSlide > totalSlides) {
        newSlide = 1;
    }

    // Don't do anything if we're already on this slide
    if (newSlide === currentSlide) return;

    const slides = document.querySelectorAll('.slide');
    const oldSlide = currentSlide;
    const direction = newSlide > oldSlide ? 'forward' : 'backward';

    // Remove active from old slide
    slides[oldSlide - 1].classList.remove('active');

    // Add transition class based on direction
    if (direction === 'forward') {
        slides[oldSlide - 1].classList.add('prev');
    }

    // Clean up old slide after animation
    setTimeout(() => {
        slides[oldSlide - 1].classList.remove('prev');
    }, 500);

    // Activate new slide
    slides[newSlide - 1].classList.add('active');

    // Update current slide number
    currentSlide = newSlide;
    currentSlideEl.textContent = currentSlide;

    // Update progress bar
    const progress = (currentSlide / totalSlides) * 100;
    progressFill.style.width = `${progress}%`;
}

prevBtn.addEventListener('click', () => {
    console.log('Previous button clicked. Current slide:', currentSlide, '-> Going to:', currentSlide - 1);
    updateSlide(currentSlide - 1);
});

nextBtn.addEventListener('click', () => {
    console.log('Next button clicked. Current slide:', currentSlide, '-> Going to:', currentSlide + 1);
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
    } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
    } else if (e.key === '+' || e.key === '=') {
        e.preventDefault();
        changeZoom(ZOOM_STEP);
    } else if (e.key === '-' || e.key === '_') {
        e.preventDefault();
        changeZoom(-ZOOM_STEP);
    } else if (e.key === '0') {
        e.preventDefault();
        zoomLevel = 1;
        applyZoom();
    }
});

// Fullscreen functionality
const fullscreenBtn = document.getElementById('fullscreenBtn');
const MIN_ZOOM = 0.7;
const MAX_ZOOM = 1.6;
const ZOOM_STEP = 0.1;
let zoomLevel = 1;

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.log(`Erro ao entrar em tela cheia: ${err.message}`);
        });
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

function updateFullscreenButton() {
    const isFullscreen = !!document.fullscreenElement;
    fullscreenBtn.innerHTML = isFullscreen
        ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
             <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>
           </svg>`
        : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
             <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
           </svg>`;
    fullscreenBtn.setAttribute('aria-label', isFullscreen ? 'Sair da tela cheia' : 'Tela cheia');
    fullscreenBtn.setAttribute('title', isFullscreen ? 'Sair da tela cheia (F)' : 'Tela cheia (F)');
}

fullscreenBtn.addEventListener('click', toggleFullscreen);

document.addEventListener('fullscreenchange', updateFullscreenButton);

function applyZoom() {
    document.documentElement.style.setProperty('--zoom-level', zoomLevel);
    zoomValueEl.textContent = `${Math.round(zoomLevel * 100)}%`;
    zoomOutBtn.disabled = zoomLevel <= MIN_ZOOM;
    zoomInBtn.disabled = zoomLevel >= MAX_ZOOM;
}

function changeZoom(delta) {
    const nextZoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, +(zoomLevel + delta).toFixed(2)));
    if (nextZoom === zoomLevel) return;
    zoomLevel = nextZoom;
    applyZoom();
}

zoomInBtn.addEventListener('click', () => changeZoom(ZOOM_STEP));
zoomOutBtn.addEventListener('click', () => changeZoom(-ZOOM_STEP));

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
    const totalSlidesEl = document.getElementById('totalSlides');
    totalSlidesEl.textContent = totalSlides;
});

// Initialize zoom UI state
applyZoom();
