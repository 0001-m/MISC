function toUpper() {
    let text = document.getElementById("text").value;
    document.getElementById("output").innerText = text.toUpperCase();
}

function getLength() {
    let text = document.getElementById("text").value;
    document.getElementById("output").innerText = "Length: " + text.length;
}

function toLower() {
    let text = document.getElementById("text").value;
    document.getElementById("output").innerText = text.toLowerCase();
}

function reverseString() {
    let text = document.getElementById("text").value;
    let reversed = text.split("").reverse().join("");
    document.getElementById("output").innerText = reversed;
}