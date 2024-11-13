function button1() {
  document.getElementById("area")
      .style.fontWeight = "bold";
}

function button2() {
  document.getElementById("area")
      .style.fontStyle = "italic";
}

function button3() {
  document.getElementById("area")
      .style.textAlign = "left";
}

function button4() {
  document.getElementById("area")
      .style.textAlign = "center";
}

function button5() {
  document.getElementById("area")
      .style.textAlign = "right";
}

function button6() {
  document.getElementById("area")
      .style.textTransform = "uppercase";
}

function button7() {
  document.getElementById("area")
      .style.textTransform = "lowercase";
}

function button8() {
  document.getElementById("area")
      .style.textTransform = "capitalize";
}

function button9() {
  document.getElementById("area")
      .style.fontWeight = "normal";
  document.getElementById("area")
      .style.textAlign = "left";
  document.getElementById("area")
      .style.fontStyle = "normal";
  document.getElementById("area")
      .style.textTransform = "capitalize";
  document.getElementById("area")
      .value = "";
}