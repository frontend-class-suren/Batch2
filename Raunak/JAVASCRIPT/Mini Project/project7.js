const thumbnails = document.querySelectorAll(".thumbnail");
const mainImage = document.getElementById("main-image");

// Add click event listener to each thumbnail
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    // Update the main image
    mainImage.src = thumbnail.src;

    // Update active thumbnail style
    thumbnails.forEach((thumb) => thumb.classList.remove("active"));
    thumbnail.classList.add("active");
  });
});
