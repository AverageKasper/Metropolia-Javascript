'use strict';

const p = document.getElementById('target');
const form = document.getElementById('source');

const first_name = document.querySelector('input[name="firstname"]');
const last_name = document.querySelector('input[name="lastname"]');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let full_name = `You are ${first_name.value} ${last_name.value}`;
    p.innerText = full_name;
});
