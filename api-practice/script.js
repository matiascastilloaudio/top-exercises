const img = document.querySelector('img');

const api_key = "XDd1440O61Sc0ciucyr5w2y8EliV30Ls";

async function getGif(searchTerm) {
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${api_key}&s=${searchTerm}&weirdness=5`, { mode: 'cors' })
        const gifData = await response.json();
        img.src = gifData.data.images.original.url;
    } catch {
        new Error('error');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    getGif('random');
});

const newImg = document.querySelector('#newImg');
newImg.addEventListener('click', () => {
    getGif('random');
});

const searchBtn = document.querySelector('#searchBtn');
searchBtn.addEventListener('click', () => {
    getGif(document.querySelector('#search').value);
});