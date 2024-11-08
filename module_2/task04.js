'use strict';

let numbers = [];

while (true) {
    let input = +prompt('Enter a number (0 to stop)');
    if (input === 0) {
        break;
    }
    numbers.push(input);
}
numbers.sort((a, b) => b - a);

console.log('Numbers largest to smallest', numbers);