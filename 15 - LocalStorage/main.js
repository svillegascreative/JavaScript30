const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];

function addItem(e) {
  e.preventDefault();
  const input = this.querySelector('input[name="item"]');
  const item = {
    name: input.value,
    checked: false
  }
  items.push(item);
  this.reset();
}

addItems.addEventListener('submit', addItem);
