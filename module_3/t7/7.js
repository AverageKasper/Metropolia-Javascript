'use strict';
const p = document.getElementById("trigger");
const img = document.getElementById("target");

p.addEventListener("mouseover", () => {
    img.src = "img/picB.jpg";
})
p.addEventListener("mouseout", () => {
    img.src = "img/picA.jpg";
})