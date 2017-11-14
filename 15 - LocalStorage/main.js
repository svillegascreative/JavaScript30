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
  displayItems();
}

function displayItems() {
  const list = items.map( (item) => {
    return `<li>${item.name}</li>`
  }).join('');
  itemsList.innerHTML = list;
}

addItems.addEventListener('submit', addItem);
