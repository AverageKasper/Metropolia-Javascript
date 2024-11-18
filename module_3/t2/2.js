'use strict';

const ul = document.getElementById("target")

const li1 = document.createElement("li")
const li2 = document.createElement("li")
const li3 = document.createElement("li")

li1.innerHTML = "First item"
li2.innerHTML = "Second item"
li3.innerHTML = "Third item"

ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3)

ul.classList.add("my-list")
