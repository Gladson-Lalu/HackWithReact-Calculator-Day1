function add() {
  var x = document.getElementById("n1").value;
  var y = document.getElementsByClassName("num2")[0].value;
  const a = parseInt(x);
  const b = parseInt(y);
  const result = a + b;
  var res = document.getElementById("result");
  res.innerText = "Result: " + result;
  console.log(a + b);
}

function sub() {
  var x = document.getElementById("n1").value;
  var y = document.getElementsByClassName("num2")[0].value;
  const a = parseInt(x);
  const b = parseInt(y);
  const result = a - b;
  var res = document.getElementById("result");
  res.innerText = "Result: " + result;
  console.log(a + b);
}

function div() {
  var x = document.getElementById("n1").value;
  var y = document.getElementsByClassName("num2")[0].value;
  const a = parseInt(x);
  const b = parseInt(y);
  const result = a / b;
  var res = document.getElementById("result");
  res.innerText = "Result: " + result;
  console.log(a + b);
}

function mul() {
  var x = document.getElementById("n1").value;
  var y = document.getElementsByClassName("num2")[0].value;
  const a = parseInt(x);
  const b = parseInt(y);
  const result = a * b;
  var res = document.getElementById("result");
  res.innerText = "Result: " + result;
  console.log(a + b);
}
