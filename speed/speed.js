let x = [
  ["c", 1.18028527e10],
  ["ma", 13397.6378],
  ["ms", 39.3700787],
  ["kmh", 10.936133],
  ["kms", 39370.0787],
  ["kn", 20.2537183],
  ["mph", 17.6],
  ["fps", 12],
  ["ips", 1]
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
