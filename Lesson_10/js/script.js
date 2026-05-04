const todoList = document.getElementById("todo-list");
const todoForm = document.getElementById("todo-form");

function addTask(task) {
            const template = document.getElementById("task-template");
            const clone = template.content.firstElementChild.cloneNode(true);
            clone.querySelector(".task-text").textContent = task;
            clone.querySelector(".edit-input").value = task;
            todoList.appendChild(clone);
        }

        function formatDateTime(dateValue, timeValue) {
            const parts = [];
            if (dateValue) parts.push(new Date(dateValue).toLocaleDateString("it-IT"));
            if (timeValue) parts.push(timeValue);
            return parts.join(" ");
        }

        function toggleEditMode(taskItem, button) {
            const taskText = taskItem.querySelector(".task-text");
            const editInput = taskItem.querySelector(".edit-input");
            const isEditing = editInput.style.display !== "none";

            if (isEditing) {
                taskText.textContent = editInput.value.trim() || taskText.textContent;
                taskText.style.display = "";
                editInput.style.display = "none";
                button.innerHTML = "&#9998;";
            } else {
                taskText.style.display = "none";
                editInput.style.display = "";
                editInput.focus();
                button.innerHTML = "&#10004;";
            }
        }

        todoForm.addEventListener("submit", function (event) {
                event.preventDefault();
                const taskInput = document.getElementById("todo-input");
                const dateInput = document.getElementById("todo-date");
                const timeInput = document.getElementById("todo-time");
                const task = taskInput.value.trim();
                const dateValue = dateInput.value;
                const timeValue = timeInput.value;

                if (task !== "") {
                    const dateTime = formatDateTime(dateValue, timeValue);
                    const fullTask = dateTime ? `${task} - ${dateTime}` : task;
                    addTask(fullTask);
                    taskInput.value = "";
                    dateInput.value = "";
                    timeInput.value = "";
                }
            });

        todoList.addEventListener("click", function (event) {
                const button = event.target.closest("button");
                if (!button) return;

                const taskItem = button.closest("li");
                if (!taskItem) return;

                if (button.classList.contains("delete-btn")) {
                    taskItem.remove();
                }

                if (button.classList.contains("edit-btn")) {
                    toggleEditMode(taskItem, button);
                }
            });

        const defaultTasks = ["HTML", "CSS", "JS", "Bootstrap"];
        defaultTasks.forEach(task => addTask(task));