let x = [
  ["mi", 1e9],
  ["dmi", 1000000],
  ["cmi", 1000],
  ["mmi", 1],
  ["hl", 100000000],
  ["l", 1000000],
  ["dl", 100000],
  ["cl", 10000],
  ["ml", 1000],
  ["fti", 28316846.6],
  ["ini", 16387.064],
  ["ydi", 764554858],
  ["afi", 1.234e12]
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
