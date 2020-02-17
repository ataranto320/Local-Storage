const addItems = document.querySelector('.add-items');
  const itemsList = document.querySelector('.plates');
  const items = [];

  function addItem(e) {
    //   console.log("hello");
    e.preventDefault();
    const text = (this.querySelector("[name=item]")).value;
    const item = {
        // text: "Item Name",
        // text: text,
        text,
        done: false
    };
    console.log(item);
  }

  addItems.addEventListener("submit", addItem);