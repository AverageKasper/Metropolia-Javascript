'use strict';

const sum = "+";
const min = "-";
const div = "/";
const mul = "*";

const input = document.getElementById("calculation");
const button = document.getElementById("start");
const result = document.getElementById("result");

button.addEventListener("click", () => {
    const equation = input.value;
    const maths = equation.split(" ");
    if (equation.includes(sum)) {
        const sum_calculation = parseFloat(maths[0]) + parseFloat(maths[2]);
        result.innerText = sum_calculation;
    } else if (equation.includes(min)) {
        const min_calculation = parseFloat(maths[0]) - parseFloat(maths[2]);
        result.innerText = min_calculation;
    } else if (equation.includes(div)) {
        const div_calculation = parseFloat(maths[0]) / parseFloat(maths[2]);
        result.innerText = div_calculation;
    } else if (equation.includes(mul)) {
        const mul_calculation = parseFloat(maths[0]) * parseFloat(maths[2]);
        result.innerText = mul_calculation;
    } else {
        result.innerText = "Invalid input";
    }
})