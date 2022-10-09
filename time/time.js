let x = [
  ["ye", 3.1536e19],
  ["wee", 6.068e17],
  ["day", 8.64e16],
  ["hou", 3.6e15],
  ["min", 6e13],
  ["sec", 1e12],
  ["milse", 1e9],
  ["micse", 1000000],
  ["picse", 1]
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
