'use strict';
const form = document.querySelector('form');
form.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const query = document.querySelector('input[name="q"]').value;
    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
        const data = await response.json();
        console.log('Response', data);
    } catch (error) {
        console.error('Error:', error);
    }
});