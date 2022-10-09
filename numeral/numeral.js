let inputA = document.getElementById("du");
let inputB = document.getElementById("rdu");
let inputC = document.getElementById("bin");
let inputD = document.getElementById("oct");
let inputE = document.getElementById("dec");
let inputF = document.getElementById("hex");
let a, b;
function saveData() {
  if (inputA.value == "" || inputB.value == "") {
    alert("invalid input!");
  } else {
      calculate();
    }
}
function calculate() {
  if(inputA.value == "bin"){
    a = parseInt(inputB.value, 2);
  }
  else if(inputA.value == "oct"){
    a = parseInt(inputB.value, 8);
  }
  else if(inputA.value == "dec"){
    a = Number(inputB.value);
  }
  else if(inputA.value == "hex"){
    a = parseInt(inputB.value, 16);
  }
  if(isNaN(a)){
    alert("invalid input!");
  }
  else{
    executeJob(a);

  }
}
function executeJob(a){
  inputE.value = a;

  inputC.value = a.toString(2);

  inputD.value = a.toString(8);

  inputF.value = a.toString(16);
}
