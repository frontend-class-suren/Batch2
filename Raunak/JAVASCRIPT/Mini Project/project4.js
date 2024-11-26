// Get elements
const clickBtn = document.getElementById("click-btn");
const background = document.getElementById("background");

// Predefined colors for the background
const colors = ["#ff4081", "#7c4dff", "#4caf50", "#03a9f4", "#ff5722", "#ffc107"];

clickBtn.addEventListener("click", (e) => {

  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  background.style.backgroundColor = randomColor;

  createCircleEffect(e.clientX, e.clientY, 30); 
});

// Function to create the circle effect
function createCircleEffect(x, y, count) {
  for (let i = 0; i < count; i++) {
    const circle = document.createElement("div");
    circle.className = "circle";

    const size = Math.random() * 10 + 10; 
    const delay = Math.random() * 0.5;
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.left = `${x - size / 2}px`;
    circle.style.top = `${y - size / 2}px`;
    circle.style.animationDelay = `${delay}s`;

    // Append circle to the background
    background.appendChild(circle);

    // Remove circle after animation ends
    circle.addEventListener("animationend", () => {
      circle.remove();
    });
  }
}
