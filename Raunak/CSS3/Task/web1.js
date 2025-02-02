const slides = document.querySelectorAll('.testimonial-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function updateSlides() {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
    });
}

function showNextSlide() {
    currentIndex = (currentIndex + 2) % slides.length;
    updateSlides();
}

function showPrevSlide() {
    currentIndex = (currentIndex - 2 + slides.length) % slides.length;
    updateSlides();
}

prevBtn.addEventListener('click', showPrevSlide);
nextBtn.addEventListener('click', showNextSlide);

// Initial setup
updateSlides();

document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqAnswer = button.nextElementSibling;

        button.classList.toggle('active');

        if (button.classList.contains('active')) {
            faqAnswer.style.display = 'block';
        } else {
            faqAnswer.style.display = 'none';
        }
    });
});
