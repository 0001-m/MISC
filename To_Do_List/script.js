

function addTask() {
    let input = document.getElementById("input");
    let task = input.value;

    if (task === "") return;

    //create elements;
    let li = document.createElement("li");
    let span = document.createElement("span");
    let editBtn = document.createElement("button");
    let deleteBtn = document.createElement("button");

    //set content
    span.textContent = task;
    editBtn.textContent = "Edit"
    deleteBtn.textContent = "Delete"

    //delete func
    deleteBtn.onclick = function () {
        li.remove();
    }

    //EDIT FUNC
    editBtn.onclick = function () {
        if (editBtn.textContent === "Edit") {
            //create input box element

            let inputBox = document.createElement("input");
            inputBox.value = span.textContent;

            li.replaceChild(inputBox, span);
            editBtn.textContent = "Save";
        } else {
            //find the input box
            let inputBox = li.querySelector("input");
            let newText = inputBox.value;

            if (newText === "") return;

            span.textContent = newText;

            li.replaceChild(span, inputBox);
            editBtn.textContent = "Edit"
        }
    }
    //append elements
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    document.getElementById("list").appendChild(li);

    input.value = "";

}