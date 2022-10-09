window.onload = () => {
  let button = document.querySelector("#btn");
  button.addEventListener("click", calculateBMI);
};

function calculateBMI() {
  let inputD = parseInt(document.querySelector("#ti").value);
  let inputE = parseInt(document.querySelector("#pi").value);
  let inputB = parseInt(document.querySelector("#year").value)
  let inputC = parseInt(document.querySelector("#month").value)
  let Totime = (inputB * 12) + inputC;
  let inputF = document.getElementById("Bill");
  let inputG = document.getElementById("Bill2");

  if (inputD === "" || isNaN(inputD)){
    alert("invalid input!");
  }
  else if (inputE === "" || isNaN(inputE)){
    alert("invalid input!");
  }

  else {
    const interest = (inputD * (inputE * 0.01)) / Totime;
    let payment = ((inputD / Totime) + interest).toFixed(2);
    inputF.value = payment;
    inputG.value = interest;
  }
}
