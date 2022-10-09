function saveData(){
  const a = document.getElementById('du').value;
  const b = document.getElementById('rdu').value;
  const x = document.getElementById('cdu').value;
  check(a,b,x);
}
function check(a, b, x){
  if(a == '' || b == '' || x == ''){
    alert("invalid input!");
  }
  calculate(a, b, x);
}
function calculate(a, b, x){
  if(a == x){
    document.getElementById('Bill').value = b + "  "+ x;
  }
  else if(a == 'megabyte' && x == 'byte'){
    document.getElementById('Bill').value = b * 1048576 + "  "+ x;
  }
  else if(a == 'kilobyte' && x == 'byte'){
    document.getElementById('Bill').value = b * 1024 + "  "+ x;
  }
  else if(a == 'gigabyte' && x == 'byte'){
    document.getElementById('Bill').value = b * 1.07374182e9 + "  "+ x;
  }
  else if(a == 'terabyte' && x == 'byte'){
    document.getElementById('Bill').value = b * 1.09951163e12 + "  "+ x;
  }
  else if(a == 'petabyte' && x == 'byte'){
    document.getElementById('Bill').value = b * 1.12589991e15 + "  "+ x;
  }

  else if(x == 'megabyte' && a == 'byte'){
    document.getElementById('Bill').value = b / 1048576 + "  "+ x;
  }
  else if(x == 'kilobyte' && a == 'byte'){
    document.getElementById('Bill').value = b / 1024 + "  "+ x;
  }
  else if(x == 'gigabyte' && a == 'byte'){
    document.getElementById('Bill').value = b / 1.07374182e9 + "  "+ x;
  }
  else if(x == 'terabyte' && a == 'byte'){
    document.getElementById('Bill').value = b / 1.09951163e12 + "  "+ x;
  }
  else if(x == 'petabyte' && a == 'byte'){
    document.getElementById('Bill').value = b / 1.12589991e15 + "  "+ x;
  }


  else if(a == 'kilobyte' && x == 'megabyte'){
    document.getElementById('Bill').value = b / 1024 + "  "+ x;
  }
  else if(a == 'gigabyte' && x == 'megabyte'){
    document.getElementById('Bill').value = b * 1024 + "  "+ x;
  }
  else if(a == 'terabyte' && x == 'megabyte'){
    document.getElementById('Bill').value = b * 1048576 + "  "+ x;
  }
  else if(a == 'petabyte' && x == 'megabyte'){
    document.getElementById('Bill').value = b * 1.07374182e9 + "  "+ x;
  }


  else if(x == 'kilobyte' && a == 'megabyte'){
    document.getElementById('Bill').value = b * 1024 + "  "+ x;
  }
  else if(x == 'gigabyte' && a == 'megabyte'){
    document.getElementById('Bill').value = b / 1024 + "  "+ x;
  }
  else if(x == 'terabyte' && a == 'megabyte'){
    document.getElementById('Bill').value = b / 1048576 + "  "+ x;
  }
  else if(x == 'petabyte' && a == 'megabyte'){
    document.getElementById('Bill').value = b / 1.07374182e9 + "  "+ x;
  }


  else if(a == 'gigabyte' && x == 'kilobyte'){
    document.getElementById('Bill').value = b * 1048576 + "  "+ x;
  }
  else if(a == 'terabyte' && x == 'kilobyte'){
    document.getElementById('Bill').value = b * 1.07374182e9 + "  "+ x;
  }
  else if(a == 'petabyte' && x == 'kilobyte'){
    document.getElementById('Bill').value = b * 1.09951163e12 + "  "+ x;
  }


  else if(x == 'gigabyte' && a == 'kilobyte'){
    document.getElementById('Bill').value = b / 1048576 + "  "+ x;
  }
  else if(x == 'terabyte' && a == 'kilobyte'){
    document.getElementById('Bill').value = b / 1.07374182e9 + "  "+ x;
  }
  else if(x == 'petabyte' && a == 'kilobyte'){
    document.getElementById('Bill').value = b / 1.09951163e12 + "  "+ x;
  }


  else if(a == 'terabyte' && x == 'gigabyte'){
    document.getElementById('Bill').value = b * 1024 + "  "+ x;
  }
  else if(a == 'petabyte' && x == 'gigabyte'){
    document.getElementById('Bill').value = b * 1048576 + "  "+ x;
  }


  else if(x == 'terabyte' && a == 'gigabyte'){
    document.getElementById('Bill').value = b / 1024 + "  "+ x;
  }
  else if(x == 'petabyte' && a == 'gigabyte'){
    document.getElementById('Bill').value = b / 1048576 + "  "+ x;
  }


  else if(a == 'petabyte' && x == 'terabyte'){
    document.getElementById('Bill').value = b * 1024 + "  "+ x;
  }


  else if(x == 'petabyte' && a == 'terabyte'){
    document.getElementById('Bill').value = b / 1024 + "  "+ x;
  }
}