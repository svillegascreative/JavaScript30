// const items = document.querySelectorAll('.item');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const checkboxArray = Array.from(checkboxes);

let lastChecked,
  lastCheckedIndex;

function setLastChecked() {
  lastChecked = this;
  lastCheckedIndex = checkboxArray.indexOf(this);
}

checkboxes.forEach( checkbox => checkbox.addEventListener('click', setLastChecked) );