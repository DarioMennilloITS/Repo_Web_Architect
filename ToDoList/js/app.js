const todoForm = document.getElementById("todoForm");
const itemInput = document.getElementById("itemInput");
const dateInput = document.getElementById("dateInput");
const todoList = document.getElementById("todoList");

const items = [];
window.items = items;

function buildItemText(item, date) {
    return `${item} - ${date}`;
}

function isValidEuropeanDate(dateText) {
    const pattern = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    const match = dateText.match(pattern);

    if (!match) return false;

    const day = Number(match[1]);
    const month = Number(match[2]);
    const year = Number(match[3]);
    const date = new Date(year, month - 1, day);

    return (
        date.getFullYear() === year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day
    );
}

function removeItem(indexToRemove) {
    items.splice(indexToRemove, 1);
    console.log("Items dopo remove:", items);
    renderItems();
}

function renderItems() {
    todoList.innerHTML = "";

    for (let i = 0; i < items.length; i += 1) {
        const li = document.createElement("li");
        li.className = "todo__item";

        const text = document.createElement("span");
        text.textContent = items[i];

        const removeButton = document.createElement("button");
        removeButton.type = "button";
        removeButton.className = "todo__delete";
        removeButton.textContent = "Remove";

        removeButton.addEventListener("click", function () {
            removeItem(i);
        });

        li.appendChild(text);
        li.appendChild(removeButton);
        todoList.appendChild(li);
    }
}

function addItem() {
    const item = itemInput.value.trim();
    const date = dateInput.value.trim();

    if (!item || !date) return;
    if (!isValidEuropeanDate(date)) {
        alert("Inserisci la data in formato europeo: dd/mm/yyyy");
        dateInput.focus();
        return;
    }

    const formattedItem = buildItemText(item, date);
    items.push(formattedItem);
    console.log("Items dopo add:", items);
    renderItems();

    todoForm.reset();
    itemInput.focus();
}

todoForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addItem();
});
