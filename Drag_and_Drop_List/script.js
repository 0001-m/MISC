let draggedItem = null;

let items = document.querySelectorAll("#list li");

items.forEach(item => {

    item.addEventListener("dragstart", function() {
        draggedItem = item;
    });

    item.addEventListener("dragover", function(e) {
        e.preventDefault();
    });

    item.addEventListener("drop", function() {
        let temp = item.innerText;
        item.innerText = draggedItem.innerText;
        draggedItem.innerText = temp;
    });

});