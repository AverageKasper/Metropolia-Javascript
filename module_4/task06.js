

const form = document.getElementById('salatut_elamat');
const article = document.getElementById('jokes');

form.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    article.innerHTML = '';
    const query = document.querySelector('input#query').value.trim();
    try {
        const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`);
        var data = await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
    if (data.result.length === 0) {
        const p = document.createElement('p');
        p.textContent = 'No jokes found';
        article.appendChild(p);
        return;
    }
    for ( i = 0; i < data.result.length; i++) {
        const p = document.createElement('p');
        p.textContent = `${i + 1}. ${data.result[i].value}`;
        article.appendChild(p);
    }
});