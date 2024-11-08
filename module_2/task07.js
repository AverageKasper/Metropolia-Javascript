'use strict';

function roll_dice(sides) {
    let rolling = Math.floor(Math.random() * sides) + 1;
    return rolling;
}
let ul = document.getElementById("more_than_six");
const dice_sides = +prompt("How many sides to a dice");
let throws = 0;
while (true) {
    let dice_result = roll_dice(dice_sides);
    let li = document.createElement("li");
    li.textContent = dice_result;
    ul.appendChild(li);
    throws++;
    if (dice_result != dice_sides) {
        continue;
    } else {
        break;
    }
}

let h2 = document.getElementById("total_throw");
h2.textContent = `Total throws: ${throws}`