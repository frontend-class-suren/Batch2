document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("popup");
    const showPopupBtn = document.getElementById("show-popup-btn");
    const closePopupBtn = document.getElementById("popup-close-btn");
  
    // Show the popup when the "Show Popup" button is clicked
    showPopupBtn.addEventListener("click", () => {
      popup.classList.remove("hidden");
      popup.classList.add("show");
    });
  
    // Close the popup when the "OK" button is clicked
    closePopupBtn.addEventListener("click", () => {
      popup.classList.remove("show");
      setTimeout(() => {
        popup.classList.add("hidden");
      }, 300); // Delay hiding completely for smooth transition
    });
  });
  