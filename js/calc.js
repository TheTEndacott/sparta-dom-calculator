console.log("rotaluclaC MOD");

var num1 = 0;
var num2 = false;
var add = false;
var sub = false;
var div = false;
var mul = false;
var calc = 0;

// Target individual number buttons.
var numButton7 = document.getElementsByClassName("buttonNum")[0];
var numButton8 = document.getElementsByClassName("buttonNum")[1];
var numButton9 = document.getElementsByClassName("buttonNum")[2];
var numButton4 = document.getElementsByClassName("buttonNum")[3];
var numButton5 = document.getElementsByClassName("buttonNum")[4];
var numButton6 = document.getElementsByClassName("buttonNum")[5];
var numButton1 = document.getElementsByClassName("buttonNum")[6];
var numButton2 = document.getElementsByClassName("buttonNum")[7];
var numButton3 = document.getElementsByClassName("buttonNum")[8];

// Get response in console. Get input onto 'screen'.
numButton7.addEventListener("click", function(event){
  event.stopPropagation();
  document.getElementById("screen").innerHTML = "7";
  if (num1 == 0) {
    num1 = 7;
  } else {
    num2 = 7;
  }
});
numButton8.addEventListener("click", function(event){
  event.stopPropagation();
  document.getElementById("screen").innerHTML = "8";
  if (num1 == 0) {
    num1 = 8;
  } else {
    num2 = 8;
  }});
numButton9.addEventListener("click", function(event){
  event.stopPropagation();
  document.getElementById("screen").innerHTML = "9";
  if (num1 == 0) {
    num1 = 9;
  } else {
    num2 = 9;
  }
});
numButton4.addEventListener("click", function(event){
  event.stopPropagation();
  document.getElementById("screen").innerHTML = "4";
  if (num1 == 0) {
    num1 = 4;
  } else {
    num2 = 4;
  }});
numButton5.addEventListener("click", function(event){
  event.stopPropagation();
  document.getElementById("screen").innerHTML = "5";
  if (num1 == 0) {
    num1 = 5;
  } else {
    num2 = 5;
  }});
numButton6.addEventListener("click", function(event){
  event.stopPropagation();
  document.getElementById("screen").innerHTML = "6";
  if (num1 == 0) {
    num1 = 6;
  } else {
    num2 = 6;
  }});
numButton1.addEventListener("click", function(event){
  event.stopPropagation();
  document.getElementById("screen").innerHTML = "1";
  if (num1 == 0) {
    num1 = 1;
  } else {
    num2 = 1;
  }});
numButton2.addEventListener("click", function(event){
  event.stopPropagation();
  document.getElementById("screen").innerHTML = "2";
  if (num1 == 0) {
    num1 = 2;
  } else {
    num2 = 2;
  }});
numButton3.addEventListener("click", function(event){
  event.stopPropagation();
  document.getElementById("screen").innerHTML = "3";
  if (num1 == 0) {
    num1 = 3;
  } else {
    num2 = 3;
  }});

// Target class operator into array
var multiplyButton = document.getElementsByClassName("operator")[0];
var divideButton = document.getElementsByClassName("operator")[1];
var subButton = document.getElementsByClassName("operator")[2];
var addButton = document.getElementsByClassName("operator")[3];
var clrButton = document.getElementsByClassName("buttonClear")[0];
var eqButton = document.getElementsByClassName("equals")[0];

multiplyButton.addEventListener("click", function(event){
  document.getElementById("screen").innerHTML = "*";
  mul = true;
});
divideButton.addEventListener("click", function(event){
  document.getElementById("screen").innerHTML = "/";
  div = true;
});
subButton.addEventListener("click", function(event){
  document.getElementById("screen").innerHTML = "-";
  div = true;
});
addButton.addEventListener("click", function(event){
  document.getElementById("screen").innerHTML = "+";
  add = true;
});
clrButton.addEventListener("click", function(event){
  document.getElementById("screen").innerHTML = "Do math";
});

// Maths happens here
eqButton.addEventListener("click", function(event){
  if (mul == true) {
    calc = num1 * num2;
    document.getElementById("screen").innerHTML = (calc);
  } else if (div == true) {
    calc = num1 / num2;
    document.getElementById("screen").innerHTML = (calc);
  } else if (sub == true) {
    calc = num1 - num2;
    document.getElementById("screen").innerHTML = (calc);
  } else if (add == true) {
    calc = num1 + num2;
    document.getElementById("screen").innerHTML = (calc);
  }
});



















