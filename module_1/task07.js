'use strict';
const dice_num = prompt("How manu six sided dices do you want to roll")
let dice_sum = 0

for (let i = 1; i <= dice_num; i++) {
    let dice_roll = Math.floor(Math.random() * 6) + 1;
    dice_sum += dice_roll;
    console.log(dice_sum, dice_roll);
}
document.getElementById("dice").innerHTML = `Total of the dice is ${dice_sum}`;