/* 
   Emre Jenedi
  Date: 10/29/2025
*/

// Addition using for loop
function addition(num) {
  let text = "";
  for (let i = 1; i <= 10; i++) {
    text += `${i} + ${num} = ${i + num}<br>`;
  }
  document.getElementById("addition").innerHTML = text;
}

// Subtraction using while loop
function subtraction(num) {
  let text = "";
  let i = 1;
  while (i <= 10) {
    text += `${i} - ${num} = ${i - num}<br>`;
    i++;
  }
  document.getElementById("subtraction").innerHTML = text;
}

// Multiplication using do-while loop
function multiplication(num) {
  let text = "";
  let i = 1;
  do {
    text += `${i} * ${num} = ${i * num}<br>`;
    i++;
  } while (i <= 10);
  document.getElementById("multiplication").innerHTML = text;
}

// Division using for loop
function division(num) {
  let text = "";
  for (let i = 1; i <= 10; i++) {
    text += `${i} / ${num} = ${(i / num).toFixed(2)}<br>`;
  }
  document.getElementById("division").innerHTML = text;
}

// Calculate all
function calculate() {
  const num = parseFloat(document.getElementById("num").value);
  if (isNaN(num)) {
    alert("Please enter a number!");
    return;
  }
  addition(num);
  subtraction(num);
  multiplication(num);
  division(num);
}

// Reset
function reset() {
  document.getElementById("num").value = "";
  document.getElementById("addition").innerHTML = "";
  document.getElementById("subtraction").innerHTML = "";
  document.getElementById("multiplication").innerHTML = "";
  document.getElementById("division").innerHTML = "";
}

// Lucky random number
function lucky() {
  const randomNum = Math.floor(Math.random() * 100) + 1;
  document.getElementById("num").value = randomNum;
  calculate();
}

// Event listeners
document.getElementById("calcBtn").addEventListener("click", calculate);
document.getElementById("resetBtn").addEventListener("click", reset);
document.getElementById("luckyBtn").addEventListener("click", lucky);
