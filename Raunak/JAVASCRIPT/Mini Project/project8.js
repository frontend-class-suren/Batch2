let startTime, updatedTime, difference, tInterval;
let running = false;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

// Event listeners for buttons
document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
document.getElementById("lap").addEventListener("click", recordLap);

function startTimer() {
    if (!running) {
        startTime = new Date().getTime() - (difference || 0);
        tInterval = setInterval(updateTimer, 10);
        running = true;
    }
}

function updateTimer() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    display.innerHTML = getFormattedTime(difference);
}

function getFormattedTime(timeInMillis) {
    let seconds = Math.floor((timeInMillis % (1000 * 60)) / 1000);
    let minutes = Math.floor((timeInMillis % (1000 * 60 * 60)) / (1000 * 60));
    let milliseconds = Math.floor((timeInMillis % 1000) / 10);

    return (
        (minutes < 10 ? "0" + minutes : minutes) +
        ":" +
        (seconds < 10 ? "0" + seconds : seconds) +
        ":" +
        (milliseconds < 10 ? "0" + milliseconds : milliseconds)
    );
}

function stopTimer() {
    if (running) {
        clearInterval(tInterval);
        running = false;
    }
}

function resetTimer() {
    clearInterval(tInterval);
    display.innerHTML = "00:00:00";
    startTime = 0;
    difference = 0;
    running = false;
    laps.innerHTML = "";
}

function recordLap() {
    if (running) {
        const lapTime = getFormattedTime(difference);
        const lapItem = document.createElement("li");
        lapItem.innerText = lapTime;
        laps.appendChild(lapItem);
    }
}
