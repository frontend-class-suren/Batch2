let count = 0;
let incrementClicks = 0;
let decrementClicks = 0;

function updateDisplay() {
    document.getElementById('count').textContent = count;
    document.getElementById('clicks').textContent = `Increment: ${incrementClicks} | Decrement: ${decrementClicks}`;
}

function resetClicks() {
    incrementClicks = 0;
    decrementClicks = 0;
    alert('Click counts have been reset after reaching 10 total actions.');
    updateDisplay();
}

function incrementCounter() {
    count++;
    incrementClicks++;
    if (incrementClicks + decrementClicks >= 10) {
        resetClicks();
    } else {
        updateDisplay();
    }
}

function decrementCounter() {
    count--;
    decrementClicks++;
    if (incrementClicks + decrementClicks >= 10) {
        resetClicks();
    } else {
        updateDisplay();
    }
}