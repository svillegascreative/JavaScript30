const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

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
  const list = items.map( (item, i) => {
    return `
      <li>
        <input id=item${i} type="checkbox" data-index="${i}" ${item.checked ? 'checked' : ''} />
        <label for=item${i}>${item.name}</label>
      </li>`
  }).join('');
  itemsList.innerHTML = list;
}

function toggleCheck(e) {
  if ( !e.target.matches('input') ) return;
  const index = e.target.dataset.index;
  items[index].checked = !items[index].checked;
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleCheck);

displayItems();
