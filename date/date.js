window.onload = () => {
  let button = document.querySelector("#btn");
  button.addEventListener("click", calculateAge);
};

function calculateAge(){
  let inputA = document.getElementById("dob").value;
  let inputB = document.getElementById("cod").value;
  let inputC = document.getElementById("age");
  let inputD = document.getElementById("nebi");
  if(inputA === "" || inputB === ""){
    alert("invalid input!");
  }
  else{
    var dateX = inputA.slice(5, 7) + "/" + inputA.slice(8, 10) + "/" + inputA.slice(0, 4);
    var dateY = inputB.slice(5, 7) + "/" + inputB.slice(8, 10) + "/" + inputB.slice(0, 4);
    var date1 = new Date(dateX);
    var date2 = new Date(dateY);

    let y1 = Number(inputA.slice(0, 4));
    let y2 = Number(inputB.slice(0, 4));
    let m1 = Number(inputA.slice(5, 7));
    let m2 = Number(inputB.slice(5, 7));
    let d1 = Number(inputA.slice(8, 10));
    let d2 = Number(inputB.slice(8, 10));

    let year;
    let day;
    let month;

  // day year month
    if(m2 >= m1){
      if(m2 === m1){
        if(d2 < d1){
          year = y2 - y1 - 1;
          month = (12 - m1) + m2 - 1;
          day = d2 + (getDaysInMonth(y2, m2-1) - d1);        }
        else{
          year = y2 - y1;
          month = m2 - m1;
          if(d2 === d1){
            day = 0;
          }
          else{
            day = d2 - d1;
          }
        }
      }
      else{
        year = y2 - y1;
        if(d2 < d1){
          month = m2 - m1 - 1;
          day = d2 + (getDaysInMonth(y2, m2-1) - d1);
        }
        else{
          month = m2 - m1;
          if(d2 === d1){
            day = 0;
          }
          else{
            day = d2 - d1;
          }
        }
      }
    }
    else{
      year = y2 - y1 - 1;
      if(d2 < d1){
        month = (12 - m1) + m2 - 1;
        day = d2 + (getDaysInMonth(y2, m2-1) - d1);
      }
      else{
        month = (12 - m1) + m2;
        if(d2 === d1){
          day = 0;
        }
        else{
          day = d2 - d1;
        }
      }
    }

    var Difference_In_Time = date2.getTime() - date1.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    inputC.value = year + " Years  " + month + " Months  " + day + " Days";
    inputD.value = Difference_In_Days + " Days";
    inputC.style.fontSize = "x-large"
    inputD.style.fontSize = "x-large"
    inputC.style.color = "#0be881";
    inputD.style.color = "#0be881";
  }

}

function getDaysInMonth(year, month) {
  if(month == 0){
    year = year - 1;
    month = 12;
  }
  return new Date(year, month, 0).getDate();
}