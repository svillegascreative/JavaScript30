// const items = document.querySelectorAll('.item');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const checkboxArray = Array.from(checkboxes);

let lastChecked,
  lastCheckedIndex,
  multipleChecked;

function setLastChecked() {
  lastChecked = this;
  lastCheckedIndex = checkboxArray.indexOf(this);
}

function checkMultiple(e) {
  if ( !lastChecked || !e.shiftKey ) return;
  if (lastCheckedIndex <= checkboxArray.indexOf(this)) {
    multipleChecked = checkboxArray.slice(lastCheckedIndex, checkboxArray.indexOf(this));
  } else {
    multipleChecked = checkboxArray.slice(checkboxArray.indexOf(this), lastCheckedIndex);
  }
  multipleChecked.forEach( checkbox => checkbox.checked = true );
}

checkboxes.forEach( checkbox => checkbox.addEventListener('click', checkMultiple) );
checkboxes.forEach( checkbox => checkbox.addEventListener('click', setLastChecked) );
