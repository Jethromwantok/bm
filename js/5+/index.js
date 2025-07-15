let input = document.getElementById("input");

function insertValue(value) {
  input.value += value;
}

function clearLog() {
  input.value = "";
}

function squareRoot() {
  input.value = Math.sqrt(input.value);
}

function equalTo() {
  input.value = eval(input.value);
}

function name(params) {}
