let itemInput = document.getElementById("itemInput");
let dateInput = document.getElementById("dateInput");
let addBtn = document.getElementById("addBtn");
let todoList = document.getElementById("todoList");

let items = [];

addBtn.addEventListener("click", function () {
  let itemValue = itemInput.value;
  let dateValue = dateInput.value;
  let [year, month, day] = dateValue.split("-");
  let formattedDate = `${day}/${month}/${year}`;
  let newItem = `${itemValue} - ${formattedDate}`;

  items.push(newItem);

  li = document.createElement("li");
  li.textContent = newItem;
  todoList.appendChild(li);

  itemInput.value = "";
  dateInput.value = "";

});
