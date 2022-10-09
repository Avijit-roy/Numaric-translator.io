let inputA = document.getElementById("du");
let inputB = document.getElementById("rdu");
let inputD = document.getElementById("Bill");
let a, b, c, i, j;
function saveData() {
  if (inputA.value == "" || inputB.value == "" ) {
    alert("invalid input!");
  } else {
    calculate();
  }
}
function calculate() {
  a = (Number(inputB.value) / 100) * Number(inputA.value);
  b = inputA.value - a;
  inputD.value = "Final price: " + b + "      you save: " + a;
}
