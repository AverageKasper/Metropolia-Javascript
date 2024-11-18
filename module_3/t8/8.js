'use strict';

const select = document.getElementById("operation"); 
const button = document.getElementById("start");
const p = document.getElementById("result");

button.addEventListener("click", () => {
    const num1 = +document.getElementById("num1").value;
    const num2 = +document.getElementById("num2").value;
    ;
    if (select.value == "add") {
        p.innerText = num1 + num2;
    } else if (select.value == "sub") {
        p.innerText = num1 - num2;
    } else if (select.value == "multi") {
        p.innerText = num1 * num2;
    } else if (select.value == "div") {
        p.innerText = num1 / num2;
    }
})

