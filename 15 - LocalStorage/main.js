const addItems = document.querySelector('.add-items');
const input = document.querySelector('input[name="item"]');
const itemsList = document.querySelector('.plates');
const items = [];

function addItem() {
  items.push(input.value);
}

addItems.addEventListener('submit', addItem);
