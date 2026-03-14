/* ============================================
   Exercise 4: Mini To-Do List
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    console.log('To-Do List exercise loaded!');
    
    // DOM Elements
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const tasksRemaining = document.getElementById('tasksRemaining');
    const emptyMessage = document.getElementById('emptyMessage');
    
    // Tasks array
    let tasks = [];
    
    // Add task function
    function addTask() {
        const taskText = taskInput.value.trim();
        
        // Validation
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }
        
        // Create task object
        const task = {
            id: Date.now(),
            text: taskText,
            completed: false
        };
        
        // Add to array
        tasks.push(task);
        
        // Create DOM element
        createTaskElement(task);
        
        // Clear input
        taskInput.value = '';
        taskInput.focus();
        
        // Update UI
        updateStats();
        updateEmptyMessage();
        
        console.log('Task added:', task);
    }
    
    // Create task DOM element
    function createTaskElement(task) {
        const li = document.createElement('li');
        li.className = 'task-item' + (task.completed ? ' completed' : '');
        li.dataset.id = task.id;
        
        // Task text
        const span = document.createElement('span');
        span.className = 'task-text';
        span.textContent = task.text;
        
        // Complete button
        const completeBtn = document.createElement('button');
        completeBtn.className = 'btn-complete';
        completeBtn.textContent = task.completed ? 'Undo' : 'Done';
        completeBtn.addEventListener('click', () => toggleComplete(task.id));
        
        // Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn-delete';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => deleteTask(task.id));
        
        // Append elements
        li.appendChild(span);
        li.appendChild(completeBtn);
        li.appendChild(deleteBtn);
        
        taskList.appendChild(li);
    }
    
    // Toggle complete status
    function toggleComplete(id) {
        const task = tasks.find(t => t.id === id);
        if (task) {
            task.completed = !task.completed;
            
            // Update DOM
            const li = taskList.querySelector(`[data-id="${id}"]`);
            if (li) {
                li.classList.toggle('completed');
                const completeBtn = li.querySelector('.btn-complete');
                completeBtn.textContent = task.completed ? 'Undo' : 'Done';
            }
            
            updateStats();
        }
    }
    
    // Delete task
    function deleteTask(id) {
        // Remove from array
        tasks = tasks.filter(t => t.id !== id);
        
        // Remove from DOM
        const li = taskList.querySelector(`[data-id="${id}"]`);
        if (li) {
            li.remove();
        }
        
        updateStats();
        updateEmptyMessage();
    }
    
    // Update stats
    function updateStats() {
        const remaining = tasks.filter(t => !t.completed).length;
        tasksRemaining.textContent = remaining;
    }
    
    // Update empty message visibility
    function updateEmptyMessage() {
        if (tasks.length === 0) {
            emptyMessage.style.display = 'block';
            taskList.style.display = 'none';
        } else {
            emptyMessage.style.display = 'none';
            taskList.style.display = 'block';
        }
    }
    
    // Event Listeners
    addTaskBtn.addEventListener('click', addTask);
    
    // Allow Enter key to add task
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
    
    // Initialize
    updateEmptyMessage();
    
});
