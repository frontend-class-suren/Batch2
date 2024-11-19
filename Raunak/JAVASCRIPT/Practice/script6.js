let display = document.getElementById("display");

// Append value to the display
function appendValue(value) {
  if (display.value === "0" || display.value === "Error") {
    display.value = "";
  }
  display.value += value;
}

// Clear the display
function clearDisplay() {
  display.value = "";
}

// Delete the last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculate() {
  try {
    display.value = eval(display.value) || "0";
  } catch {
    display.value = "Error";
  }
}
