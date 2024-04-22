// Select the button element
const redirectButton = document.getElementById("homeBtn");

//event listener
redirectButton.addEventListener("click", redirect);
//event function
function redirect() {
  // Redirect to desired HTML page
  window.location.href = "index.html";
}

//event listener
document.getElementById("calc-btn").addEventListener("click", calcAll);

//event function
function calcAll() {
  //input
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let num3 = document.getElementById("num3").value;

  //process
  let volOut = num1 * num2 * num3;
  let areaOut = 2 * (num2 * num1 + num3 * num1 + num3 * num2);

  volOut = volOut.toFixed(2);
  areaOut = areaOut.toFixed(2);

  //output
  document.getElementById("volOut").innerHTML = `${volOut} m³`;
  document.getElementById("areaOut").innerHTML = `${areaOut} m²`;
}

//event listenser
document.getElementById("clr-btn").addEventListener("click", clrAll);

//event function
function clrAll() {
  //process
  location.reload();
}
