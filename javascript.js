const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];
// const deleteButton = document.querySelector('.delete');
// const buttons = document.querySelectorAll('.button')

  function addItem(e) {
    //   console.log("hello");
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        // text: "Item Name",
        // text: text,
        text,
        done: false
    };
    // console.log(item);
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
  }

// function deleteHandler(e) {
//     localStorage.clear()
//     localStorage.setItem('items', JSON.stringify(items))
//     populateList([], itemsList)
// }

// function handleButton(e) {  
//     items.forEach(function(item, index, array) {
//       e.target.name === 'checkAll'
//         ? (items[index].done = true)
//         : (items[index].done = false)
//     })
//     console.log(items)
//     localStorage.setItem('items', JSON.stringify(items))
//     populateList(items, itemsList)
//   }

  function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
        return `
            <li>
                <input type='checkbox' data-index=${i} id='item${i}' ${plate.done ? 'checked' : ''} />
                <label for='item${i}'>${plate.text}</label>
            </li>
        `;
    }).join('');
  }

  function toggleDone(e) {
    if (!e.target.matches('input')) return; // skip this unless it's an input
    // console.log(e.target);
    const el = e.target;
    // console.log(el.dataset.index);
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
  }

  addItems.addEventListener('submit', addItem);
  itemsList.addEventListener('click', toggleDone);
//   deleteButton.addEventListener('submit', deleteHandler);
//   buttons.forEach(button => button.addEventListener('click', handleButton));

  populateList(items, itemsList);

  //think of clear button
  //maybe select and unselect all button