// select the button element
const redirectButton1 = document.getElementById("cubeBtn");

// event listener
redirectButton1.addEventListener("click", redirect1);

//event function
function redirect1() {
  // Redirect to desired HTML page
  window.location.href = "square.html";
}

// Select the button element
const redirectButton2 = document.getElementById("rectangleBtn");

// event listener
redirectButton2.addEventListener("click", redirect2);

//event function
function redirect2() {
  // Redirect to desired HTML page
  window.location.href = "rectangle.html";
}

// Select the button element
const redirectButton3 = document.getElementById("sphereBtn");

// event listener
redirectButton3.addEventListener("click", redirect3);

//event function
function redirect3() {
  // Redirect to desired HTML page
  window.location.href = "sphere.html";
}
