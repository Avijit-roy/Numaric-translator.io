let x = [
  ["nm", 1],
  ["mic", 1000],
  ["mill", 1000000],
  ["cent", 10000000],
  ["metr", 1000000000],
  ["kilo", 1000000000000],
  ["inc", 25400000],
  ["feet", 304800000],
  ["yard", 914400000],
  ["miles", 1609344000000],
  ["nau", 1852000000000]
];
let inputA = document.getElementById("du");
let inputB = document.getElementById("rdu");
let inputC = document.getElementById("cdu");
let inputD = document.getElementById("Bill");
let a, b, c, i, j;
function saveData() {
  if (inputA.value == "" || inputB.value == "" || inputC.value == "") {
    alert("invalid input!");
  } else {
    calculate();
  }
}
function calculate() {
  for(i in x){
    if (x[i][0] == inputA.value){
      a = i;
    }
  }
  for(j in x){
    if (x[j][0] == inputC.value){
      b = j;
    }
  }
  c = (x[a][1] * inputB.value) / x[b][1];
  inputD.value = c;
}
