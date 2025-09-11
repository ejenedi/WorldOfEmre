/* 
   Emre Jenedi
  Date: 09/08/2025
*/

// String variable
let myName = "Emre Jenedi";
let para1 = document.getElementById("p1");
para1.textContent = myName;

// Two numeric variables
let n1 = 10; 
let n2 = 5;  

// Add the two numbers
let numberSum = n1 + n2;

// Set the result in paragraph 2
document.getElementById("p2").textContent = numberSum;

// Multiply the two numbers
let numberMult = n1 * n2;

// Set the result in paragraph 3
document.getElementById("p3").textContent = numberMult;



// Add a number to the string
let myNameAddNum = myName + " " + n1;

// Set the result in paragraph 4
document.getElementById("p4").textContent = myNameAddNum;


// Multiply string by number 
let myNameMultNum = myName * n2;

// Set the result in paragraph 5
document.getElementById("p5").textContent = myNameMultNum;



// Compare my age 
let ageCompare = 29 > numberMult;

// Set the result in paragraph 6
document.getElementById("p6").textContent = ageCompare;

