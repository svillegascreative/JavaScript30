// const items = document.querySelectorAll('.item');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

let lastChecked;

function setLastChecked(e) {
  lastChecked = this;
}

checkboxes.forEach( checkbox => checkbox.addEventListener('click', setLastChecked) );
