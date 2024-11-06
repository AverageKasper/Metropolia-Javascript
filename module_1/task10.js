'use strict';

const dice_amount = prompt("How many dices to throw?");
const dice_target = prompt("What is the target score?");

const repeats = 1000000;
let target_hits = 0;

for (let i = 1; i <= repeats; i++) {
    let dice_sum = 0;
    for (let j = 1; j <= dice_amount; j++) {
        let dice_roll = Math.floor(Math.random() * 6) + 1;
        dice_sum += dice_roll;
    }
    if (dice_sum == dice_target){
        target_hits++;
    }
}
const probability = (target_hits / repeats) * 100;
console.log(target_hits + ", " + dice_target + ", " + probability);
document.getElementById("dice_probability").innerHTML = `Probability of throwing ${dice_target} with ${dice_amount} six-sided dice is ${probability.toFixed(2)}%`;