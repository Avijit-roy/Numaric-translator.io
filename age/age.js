window.onload = () => {
  let button = document.querySelector("#btn");
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;

  const formattedToday = yyyy + '-' + mm + '-' + dd ;

  document.getElementById('cod').value = formattedToday;
    // Function for calculating BMI
  button.addEventListener("click", calculateAge);
};

function calculateAge(){
  let inputA = document.getElementById("dob").value;
  if(inputA === ""){
    alert("invalid input!");
  }
  else{
    let inputB = document.getElementById("cod").value;
    let inputC = document.getElementById("age");
    let inputD = document.getElementById("nebi");
    let y1 = Number(inputA.slice(0, 4));
    let y2 = Number(inputB.slice(0, 4));
    let m1 = Number(inputA.slice(5, 7));
    let m2 = Number(inputB.slice(5, 7));
    let d1 = Number(inputA.slice(8, 10));
    let d2 = Number(inputB.slice(8, 10));

    let year;
    let day;
    let month;
    let reDay;
    let reMonth;

  // day year month
    if(m2 >= m1){
      if(m2 === m1){
        if(d2 < d1){
          year = y2 - y1 - 1;
          month = (12 - m1) + m2 - 1;
          day = d2 + (getDaysInMonth(y2, m2-1) - d1);
          reDay = d1 - d2;
        }
        else{
          year = y2 - y1;
          month = m2 - m1;
          if(d2 === d1){
            day = 0;
            reDay = 0;
          }
          else{
            day = d2 - d1;
            reDay = d1 + (getDaysInMonth(y2, m2) - d2);
          }
        }
      }
      else{
        year = y2 - y1;
        if(d2 < d1){
          month = m2 - m1 - 1;
          day = d2 + (getDaysInMonth(y2, m2-1) - d1);
          reDay = d1 - d2;
        }
        else{
          month = m2 - m1;
          if(d2 === d1){
            day = 0;
            reDay = 0;
          }
          else{
            day = d2 - d1;
            reDay = d1 + (getDaysInMonth(y2, m2) - d2);
          }
        }
      }
    }
    else{
      year = y2 - y1 - 1;
      if(d2 < d1){
        month = (12 - m1) + m2 - 1;
        day = d2 + (getDaysInMonth(y2, m2-1) - d1);
        reDay = d1 - d2;
      }
      else{
        month = (12 - m1) + m2;
        if(d2 === d1){
          day = 0;
          reDay = 0;
        }
        else{
          day = d2 - d1;
          reDay = d1 + (getDaysInMonth(y2, m2) - d2);
        }
      }
    }
    reMonth = 11 - month;
    inputC.value = year + " Years  " + month + " Months  " + day + " Days";
    inputD.value = reMonth + " Months  " + reDay + " Days  " + " to go";
    inputC.style.fontSize = "x-large"
    inputD.style.fontSize = "x-large"
    inputC.style.color = "#0be881";
    inputD.style.color = "#0be881";
    if(month == 0 && day == 0){
      inputD.value = " Happy birthday 🥳🤩🎂🎉";
    }
  }

}

function getDaysInMonth(year, month) {
  if(month == 0){
    year = year - 1;
    month = 12;
  }
  return new Date(year, month, 0).getDate();
}
