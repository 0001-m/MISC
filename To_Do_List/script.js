function addTask() {
    let task = document.getElementById("task").value;

    if (task === "") return;

    let list = document.getElementById("list");

    list.innerHTML += `
        <li>
            ${task}
            <button onclick="deleteTask(this)">Delete</button>
        </li>
    `;
}

function deleteTask(btn) {
    btn.parentElement.remove();
}