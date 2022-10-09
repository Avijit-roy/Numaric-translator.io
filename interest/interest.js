window.onload = () => {
  let button = document.querySelector("#btn");
  button.addEventListener("click", calculateBMI);
};

function calculateBMI() {
  let inputD = parseInt(document.querySelector("#ti").value);
  let inputE = parseInt(document.querySelector("#pi").value);
  let inputA, z;
  let inputB = parseInt(document.querySelector("#year").value)
  let inputC = parseInt(document.querySelector("#month").value)
  let Totime = inputB + (inputC / 10);
  let inputF = document.getElementById("Bill");
  let inputG = document.getElementById("Bill2");

  if (inputD === "" || isNaN(inputD)){
    alert("invalid input!");
  }
  else if (inputE === "" || isNaN(inputE)){
    alert("invalid input!");
  }

  else {
    var x = document.getElementsByName('flexRadioDefault');
    for(let i = 0; i < x.length; i++) {
      if(x[i].checked){
        inputA = x[i].value;
      }
    }
    if(inputA === "ot"){
      z = (inputD * Totime * inputE) / 100;
      inputF.value = (inputD + z).toFixed(4) ;
      inputG.value =  z.toFixed(4);
    }
    else{
      z = (Math.pow((1 + (inputE / 100)),Totime)) * inputD;
      inputF.value = z.toFixed(4);
      inputG.value =  (z - inputD).toFixed(4);
    }
  }
}
