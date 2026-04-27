async function addStudent() {
    let name = document.getElementById("name").value;
    let marks = document.getElementById("marks").value;

    await fetch("http://localhost:3000/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, marks })
    });

    alert("Student Added");
}

async function loadStudents() {
    let res = await fetch("http://localhost:3000/students");
    let data = await res.json();

    let list = document.getElementById("list");
    list.innerHTML = "";

    data.forEach(s => {
        list.innerHTML += `<li>${s.name} - ${s.marks}
            <button onclick="deleteStudent('${s.name}')">Delete</button>
        </li>`;
    });
}

async function deleteStudent(name) {
    await fetch(`http://localhost:3000/delete/${name}`, {
        method: "DELETE"
    });

    loadStudents();
}