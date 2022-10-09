let inputA = document.getElementById("du");
let inputB = document.getElementById("rdu");
let inputC = document.getElementById("cdu");
let inputD = document.getElementById("Bill");
let a, b;
function saveData() {
  if (inputA.value == "" || inputB.value == "" || inputC.value == "") {
    alert("invalid input!");
  } else {
      if(inputA.value === inputC.value){
        inputD.value = inputB.value;
      }
      else{
        calculate();
      }
  }
}
function calculate() {
  if(inputA.value == "c"){
    a = Number(inputB.value);
  }
  else if(inputA.value == "f"){
    a = (Number(inputB.value) - 32) * (5 / 9);
  }
  else if(inputA.value == "k"){
    a = Number(inputB.value) - 273.15;
  }
  else if(inputA.value == "ra"){
    a = (Number(inputB.value) - 491.67) * (5 / 9);
  }
  else if(inputA.value == "re"){
    a = Number(inputB.value) * (5 / 4);
  }
  else if(inputA.value == "ne"){
    a = Number(inputB.value) * (100 / 33);
  }
  else if(inputA.value == "ro"){
    a =  (Number(inputB.value) - 7.5) * (40 / 21);
  }
  else if(inputA.value == "de"){
    a = 100 - (Number(inputB.value) * (2 / 3));
  }
  executeJob(a);
}
function executeJob(a){
  if(inputC.value == "c"){
    b = a;
  }
  else if(inputC.value == "f"){
    b = (a * (9 / 5)) + 32;
  }
  else if(inputC.value == "k"){
    b =  a + 273.15;
  }
  else if(inputC.value == "ra"){
    b = (a + 273.15) * (9 / 5);
  }
  else if(inputC.value == "re"){
    b =  a * (4 / 5);
  }
  else if(inputC.value == "ne"){
    b =  a * (33 / 100);
  }
  else if(inputC.value == "ro"){
    b =  (a * (21 / 40)) + 7.5;
  }
  else if(inputC.value == "de"){
    b = (100 - a) * (3 / 2);
  }
  inputD.value = b;
}
