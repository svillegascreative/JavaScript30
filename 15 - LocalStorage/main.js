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
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
  displayItems();
}

function displayItems() {
  const list = items.map( (item) => {
    return `
      <li>
        <input id=${item.name} type="checkbox" ${item.checked ? 'checked' : ''} />
        <label for=${item.name}>${item.name}</label>
      </li>`
  }).join('');
  itemsList.innerHTML = list;
}

addItems.addEventListener('submit', addItem);
