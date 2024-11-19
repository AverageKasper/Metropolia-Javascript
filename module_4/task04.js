'use strict';
const form = document.querySelector('form');
const div = document.getElementById('results');
const article = document.createElement('article');
form.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const query = document.getElementById('query').value;
    article.innerHTML = '';
    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
        const data = await response.json();
        console.log('Response', data);
        const h3 = document.createElement('h3');
        const img = document.createElement('img');
        const a = document.createElement('a');
        const summary = document.createElement('div');
        const breaker = document.createElement('br');
        h3.textContent = data[0].show.name;
        if (data[0].show.image) {
            img.src = data[0].show.image.medium;
        } else {
            img.src = 'https://placehold.co/210x295?text=Not+found';
        }
        a.href = data[0].show.url;
        a.textContent = data[0].show.url;
        summary.innerHTML = data[0].show.summary;

        article.appendChild(h3);
        article.appendChild(img);
        article.appendChild(breaker);
        article.appendChild(a);
        article.appendChild(summary);

        div.appendChild(article);
    } catch (error) {
        console.error('Error:', error);
    }

});