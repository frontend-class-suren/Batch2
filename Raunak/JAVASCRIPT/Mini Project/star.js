const stars = document.querySelectorAll('.star');
const result = document.getElementById('ratingResult');

stars.forEach(star => {
    star.addEventListener('click', () => {
        const rating = star.getAttribute('data-value');
        stars.forEach(s => s.classList.remove('selected'));
        star.classList.add('selected');
        star.nextElementSibling && star.nextElementSibling.classList.add('selected');
        result.textContent = `You rated this ${rating} star${rating > 1 ? 's' : ''}.`;
    });

    star.addEventListener('mouseover', () => {
        stars.forEach(s => s.classList.remove('hovered'));
        star.classList.add('hovered');
        let nextStar = star;
        while ((nextStar = nextStar.nextElementSibling)) {
            nextStar.classList.add('hovered');
        }
    });

    star.addEventListener('mouseout', () => {
        stars.forEach(s => s.classList.remove('hovered'));
    });
});