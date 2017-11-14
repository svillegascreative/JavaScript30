const addItems = document.querySelector('.add-items');
const input = document.querySelector('input[name="item"]');
const itemsList = document.querySelector('.plates');
const items = [];

function addItem(e) {
  e.preventDefault();
  const item = {
    name: input.value,
    checked: false
  }
  items.push(item);
  this.reset();
}

addItems.addEventListener('submit', addItem);
