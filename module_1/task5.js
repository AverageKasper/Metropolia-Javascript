'use strict';
const year = prompt("Enter a year");
let leap_year = '';
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    leap_year = year + " is a leap year!";
} else {
    leap_year = year + " is not a leap year!";
}

document.getElementById("leapyear").innerHTML = leap_year;