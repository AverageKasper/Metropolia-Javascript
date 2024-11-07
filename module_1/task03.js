'use strict';

const num1 = prompt('Enter the first number');
const num2 = prompt('Enter the second number');
const num3 = prompt('Enter the third number');

const num1int= parseFloat(num1);
const num2int= parseFloat(num2);
const num3int= parseFloat(num3);

const sum = num1int + num2int + num3int;
const product = num1int * num2int * num3int;
const average = sum / 3;

document.getElementById("math").innerHTML = `The sum is ${sum}, product is ${product} and average is ${average}`;
