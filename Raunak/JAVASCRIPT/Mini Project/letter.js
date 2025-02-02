const textContainer = document.getElementById('hoverText');
const letters = textContainer.textContent.split('');

textContainer.innerHTML = '';
letters.forEach(letter => {
    const span = document.createElement('span');
    span.textContent = letter;
    textContainer.appendChild(span);
});