window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
        header.classList.remove('top');
    } else {
        header.classList.add('top');
        header.classList.remove('scrolled');
    }
});

// Carousel functionality
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-large-item');
    const totalSlides = slides.length;
    
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    document.querySelector('.carousel-large').style.transform = `translateX(${offset}%)`;
}

document.querySelector('.next').addEventListener('click', function() {
    showSlide(currentIndex + 1);
});

document.querySelector('.prev').addEventListener('click', function() {
    showSlide(currentIndex - 1);
});

// Auto slide every 5 seconds
setInterval(function() {
    showSlide(currentIndex + 1);
}, 5000);

// Initialize the first slide
showSlide(currentIndex);


//Carrusel de la tienda
const carouselContainer = document.getElementById('carousel-container');
const leftButton = document.getElementById('left-button');
const rightButton = document.getElementById('right-button');

let scrollPosition = 0;

leftButton.addEventListener('click', () => {
    const itemWidth = carouselContainer.querySelector('.carousel-item').offsetWidth;
    const containerWidth = carouselContainer.offsetWidth;
    
    scrollPosition -= itemWidth;
    if (scrollPosition <= 0) {
        scrollPosition = 0;
        leftButton.classList.add('hidden');
    }
    rightButton.classList.remove('hidden');
    carouselContainer.style.transform = `translateX(-${scrollPosition}px)`;

    
});




