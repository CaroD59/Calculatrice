const display = document.getElementById("display");

function appendToDisplay(input) {
  if (display.innerText === "0") {
    display.innerText = input;
  } else {
    display.innerText += input;
  }
}

function clearDisplay() {
  display.innerText = "0";
}

function deleteLast() {
  let currentText = display.innerText;

  if (currentText.length > 1) {
    display.innerText = currentText.slice(0, -1);
  } else {
    display.innerText = "0";
  }
}

function calculate() {
  try {
    display.innerText = eval(display.innerText);
  } catch {
    display.innerText = "Erreur";
  }
}
