let x = [
  ["smm", 1],
  ["sc", 100],
  ["sme", 1000000],
  ["h", 10000000000],
  ["sk", 1000000000000],
  ["si", 645.16],
  ["sf", 92903.04],
  ["sy", 836127.4],
  ["a", 4046856422],
  ["sm", 2589988110336]
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
