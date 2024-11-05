'use strict';
const start_year = prompt("Enter start year");
const end_year = prompt("Enter end year");

let ul = document.getElementById("leap_year_list");
for (let i = start_year; i <= end_year; i++) {
    if ((i % 4 === 0 && i % 100 !== 0) || (i % 400 === 0)) {
        let li = document.createElement("li");
        li.innerText = i;
        ul.appendChild(li);
    } 
}