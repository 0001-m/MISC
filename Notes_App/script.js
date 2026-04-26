let notes = JSON.parse(localStorage.getItem("notes")) || [];

displayNotes();

function addNote() {
    let note = document.getElementById("note").value;

    if (note === "") return;

    notes.push(note);

    localStorage.setItem("notes", JSON.stringify(notes));

    displayNotes();

    document.getElementById("note").value = "";
}

function displayNotes() {
    let list = document.getElementById("list");

    list.innerHTML = "";

    for (let i = 0; i < notes.length; i++) {
        list.innerHTML += `
            <li>
                ${notes[i]}
                <button onclick="deleteNote(${i})">Delete</button>
            </li>
        `;
    }
}

function deleteNote(index) {
    notes.splice(index, 1);

    localStorage.setItem("notes", JSON.stringify(notes));

    displayNotes();
}