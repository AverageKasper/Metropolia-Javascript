'use strict';
const year = prompt("Enter a year");
let leap_year = '';
if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            leap_year = year + " is a leap year!";
            console.log('1');
        } else {
            leap_year = year + " is not a leap year!";
            console.log("2");
        }
    } else {
        leap_year = year + " is a leap year!";
        console.log("3");
    }
} else {
    leap_year = year + " is not a leap year!"
    console.log("4");
}

document.getElementById("leapyear").innerHTML = leap_year;