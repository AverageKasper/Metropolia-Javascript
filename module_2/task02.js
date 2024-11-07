'use strict';
const participant_amount = +prompt("How many participants?");
let participant_list = []
for (let i = 0; i < participant_amount; i++) {
    participant_list.push(prompt(`Enter the name of participant ${i + 1}`));
}
participant_list.sort()
let ol = document.getElementById("participant_list");
for (let part = 0; part < participant_amount; part++) {
    let li = document.createElement("li");
    li.innerText = participant_list[part];
    ol.appendChild(li);

}