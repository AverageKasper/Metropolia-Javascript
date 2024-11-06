'use strict';
let number_list = [];
for (let i = 0; i < 5; i++) {
    let num = prompt(`${i + 1}. number`)
    number_list.push(num)
}

for (let i = 0; i < 5; i++) {
    console.log(number_list.pop())
}