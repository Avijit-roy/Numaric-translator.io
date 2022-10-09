window.onload = () => {
  let button = document.querySelector("#btn");
  button.addEventListener("click", calculateBMI);
};

function calculateBMI() {
  let inputA = parseInt(document.querySelector("#gst").value);
  let inputB = parseInt(document.querySelector("#amount").value);
  let inputC = document.getElementById("Bill1");
  let inputD = document.getElementById("Bill2");
  let inputE = document.getElementById("Bill3");
  let inputF = document.getElementById("Bill4");

  if (inputB === "" || isNaN(inputB)){
    alert("invalid input!");
  }
  else {
    let z = (inputA / 100) * inputB;
    inputC.value = (inputB + z).toFixed(4);
    inputD.value = (z / 2).toFixed(4);
    inputE.value = (z / 2).toFixed(4);
    inputF.value = z.toFixed(4);
  }
}
