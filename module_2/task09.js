'use strict'; 

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,];

function even(array) {
    let new_numbers = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            new_numbers.push(array[i]);
        }
    }
    return new_numbers;
}
console.log('Original array:', number);
console.log("New array", even(number));