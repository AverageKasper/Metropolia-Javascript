'use strict'; 

const clans = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw']
const choice = Math.floor(Math.random() * 4)
const name = prompt("Enter your name")
const result = name + ', you are a ' + clans[choice] + '!'
document.getElementById("hogwart").innerHTML = result