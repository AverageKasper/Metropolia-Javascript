'use strict';

function roll_dice() {
    let rolling = Math.floor(Math.random() * 6) + 1;
    return rolling;
}
let ul = document.getElementById("six");

while (true) {
    let dice_result = roll_dice();
    let li = document.createElement("li");
    li.textContent = dice_result;
    ul.appendChild(li);
    if (dice_result != 6) {
        continue;
    } else {
        break;
    }
}