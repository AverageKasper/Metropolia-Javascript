'use strict';

let numbers = [];

while (true) {
    let input = +prompt('Enter a number');
    if (numbers.includes(input)) {
        alert("The number has been inputted already");
        break;
    }
    numbers.push(input);
}
numbers.sort((a, b) => a - b);

console.log('Numbers in ascending order', numbers);