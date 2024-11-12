//script.js
function formatText1() {
  document.getElementById("textarea1").style.fontWeight = "bold";
}

function formatText2() {
  document.getElementById("textarea1").style.fontStyle = "italic";
}

function formatText3() {
  document.getElementById("textarea1").style.textAlign = "left";
}

function formatText4() {
  document.getElementById("textarea1").style.textAlign = "center";
}

function formatText5() {
  document.getElementById("textarea1").style.textAlign = "right";
}

function transformText1() {
  document.getElementById("textarea1").style.textTransform = "uppercase";
}

function transformText2() {
  document.getElementById("textarea1").style.textTransform = "lowercase";
}

function capitalizeText() {
  document.getElementById("textarea1").style.textTransform = "capitalize";
}

function font_variant() {
    document.getElementById("textarea1").style.fontVariant = "small-caps";
  }

function underline() {
  document.getElementById("textarea1").style.textDecoration = "underline";
}

function clearText() {
  document.getElementById("textarea1").style.fontWeight = "normal";
  document.getElementById("textarea1").style.textAlign = "left";
  document.getElementById("textarea1").style.fontStyle = "normal";
  document.getElementById("textarea1").style.textTransform = "capitalize";
  document.getElementById("textarea1").style.fontVariant = "small-caps";
   document.getElementById("textarea1").style.textDecoration = "underline";
  document.getElementById("textarea1").value = "";
}
