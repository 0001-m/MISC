let students = [];

function addStudent() {
    let name = document.getElementById("name").value;
    let marks = document.getElementById("marks").value;

    if (name === "" || marks === "") return;

    students.push({ name: name, marks: marks });

    displayStudents();

    document.getElementById("name").value = "";
    document.getElementById("marks").value = "";
}

function displayStudents() {
    let list = document.getElementById("list");

    list.innerHTML = "";

    for (let i = 0; i < students.length; i++) {
        list.innerHTML += `
            <li>
                ${students[i].name} - ${students[i].marks}
                <button onclick="deleteStudent(${i})">Delete</button>
                <button onclick="editStudent(${i})">Edit</button>
            </li>
        `;
    }
}

function deleteStudent(index) {
    students.splice(index, 1);
    displayStudents();
}

function editStudent(index) {
    let newMarks = prompt("Enter new marks:");

    if (newMarks !== null) {
        students[index].marks = newMarks;
        displayStudents();
    }
}