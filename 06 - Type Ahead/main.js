const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

fetch(endpoint)
  .then( response => response.json() )
  .then( data => cities.push(...data) );

function findMatches(wordToMatch, array) {
  return array.filter( item => {
    const regex = new RegExp(wordToMatch, 'gi');
    return item.city.match(regex) || item.state.match(regex);
  });
}

function displayMatches() {
  const matches = findMatches(this.value, cities);
  const regex = new RegExp(this.value, 'gi');
  const highlight = `<span class="hl">${this.value}</span>`
  const list = matches.map( item => {
    const cityName = item.city.replace(regex, highlight);
    const stateName = item.state.replace(regex, highlight);
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">Pop. ${item.population}</span>
      </li>
    `
  }).join('');
  suggestions.innerHTML = list;
}

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
