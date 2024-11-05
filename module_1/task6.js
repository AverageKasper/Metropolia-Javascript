'use strict';
const maybe_square = confirm("Should I calculate the square root?");
if (maybe_square === true) {
    const num = prompt("Enter a number");
    if (num < 0) {
        document.getElementById("square_root").innerHTML = "The square root of a negative number is not defined";
    } else {
        const int_num = parseInt(num)
        const square = Math.sqrt(int_num);
        document.getElementById("square_root").innerHTML = `The square root of ${num} is ${square}.`;
    }



} else {
    document.getElementById("square_root").innerHTML = "The square root is not calculated.";
}