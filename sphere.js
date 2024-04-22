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

  let volOut = (4 / 3) * Math.PI * num1 ** 3;
  let areaOut = 4 * Math.PI * num1 ** 2;

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
