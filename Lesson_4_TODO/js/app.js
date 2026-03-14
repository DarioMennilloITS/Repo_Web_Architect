let itemInput = document.getElementById("itemInput");
let dateInput = document.getElementById("dateInput");
let addBtn = document.getElementById("addBtn");
let todoList = document.getElementById("todoList");

let items = [];

addBtn.addEventListener("click", function () {
  let itemValue = itemInput.value;
  let dateValue = dateInput.value;
    let dateObj = new Date(dateValue);
    let formattedDate = dateObj.toLocaleDateString("it-IT");
  let newItem = `${itemValue} - ${formattedDate}`;

  items.push(newItem);

    let li = document.createElement("li");
  li.textContent = newItem;
  todoList.appendChild(li);

  itemInput.value = "";
  dateInput.value = "";

});
