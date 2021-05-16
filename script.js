var bill = 120;
var tax = 0.07;
var tip = 0.05;
var totalTax;
var totalTip;

totalTax = bill*tax;
totalTip = bill*tip;

var totalBill = (totalTax)+(totalTip)+bill;

prompt = prompt("How much was your bill?");

document.querySelector(".number").innerHTML = totalBill;