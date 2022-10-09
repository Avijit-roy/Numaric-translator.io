let x = [
  ["t", 1e12],
  ["kil", 1e9],
  ["g", 1000000],
  ["mg", 1000],
  ["mic", 1],
  ["q", 1e11],
  ["lb", 453592370],
  ["oz", 28349523.1],
  ["ct", 200000],
  ["gr", 64798.91],
  ["lt", 1.01604691e12],
  ["sht", 9.0718474e11],
  ["cwt1", 5.08023454e10],
  ["cwt2", 4.5359237e10],
  ["st", 6.35029318e9],
  ["dr", 1771845.2],
  ["dan", 5e10],
  ["jin", 500000000],
  ["qian", 5000000],
  ["liang", 50000000],
  ["jitw", 600000000]
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
