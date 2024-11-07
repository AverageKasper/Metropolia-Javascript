'use strict';

let doggy_list = []
for (let i = 0; i < 6; i++) {
    doggy_list.push(prompt(`Enter the name of doggy ${i + 1}`));
}

doggy_list.sort().reverse();
let ul = document.getElementById("doggy");
for (let dog = 0; dog < 6; dog++) {
    let li = document.createElement("li");
    li.innerText = doggy_list[dog];
    ul.appendChild(li);
}