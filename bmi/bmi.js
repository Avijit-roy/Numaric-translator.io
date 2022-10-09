window.onload = () => {
  let button = document.querySelector("#btn");
  // Function for calculating BMI
  button.addEventListener("click", calculateBMI);
};

function calculateBMI() {
  let height = parseInt(document.querySelector("#height").value);
  let weight = parseInt(document.querySelector("#weight").value);
  let result = document.getElementById("result");

  if (height === "" || isNaN(height)){
    alert("invalid input!");
  }
  else if (weight === "" || isNaN(weight)){
    alert("invalid input!");
  }

  else {
    bmi = (weight / Math.pow( (height/100), 2 )).toFixed(1);
    document.getElementById("result2").value = bmi;
    console.log(height);

    // Dividing as per the bmi conditions
    if(bmi < 18.5){
      result.value =  "Underweight 😒";
      result.style.color = "#ffc44d";
      document.getElementById("result2").style.color = "#ffc44d";
      result.style.fontSize = "xx-large"

    }
    else if( bmi >= 18.5 && bmi <= 24.9 ){
      result.value = "Normal Weight 😍";
      result.style.color = "#0be881";
      document.getElementById("result2").style.color = "#0be881";
      result.style.fontSize = "xx-large"
    }
    else if( bmi >= 25 && bmi <= 29.9 ){
      result.value = "Overweight 😮";
      result.style.color = "#ff884d";
      document.getElementById("result2").style.color = "#ff884d";
      result.style.fontSize = "xx-large"

    }
    else{
      result.value = "Obese 😱";
      result.style.color = "#ff5e57";
      document.getElementById("result2").style.color = "#ff5e57";
      result.style.fontSize = "xx-large"
    }
  }
}
