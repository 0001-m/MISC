let tasks = [];

// Create
function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if (taskText === "") {
        alert("Enter a task");
        return;
    }

    tasks.push(taskText);
    input.value = "";
    displayTasks();
}

// Read
function displayTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        list.innerHTML += `
            <li>
                ${tasks[i]}
                <button onclick="editTask(${i})">Edit</button>
                <button onclick="deleteTask(${i})">Delete</button>
            </li>
        `;
    }
}

// Update
function editTask(index) {
    let newTask = prompt("Edit task:", tasks[index]);

    if (newTask !== null && newTask.trim() !== "") {
        tasks[index] = newTask.trim();
        displayTasks();
    }
}

// Delete
function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}