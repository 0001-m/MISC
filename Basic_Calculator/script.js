function add(){
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;

    let result = Number(n1) + Number(n2);

    document.getElementById("result").innerText = "Result: " + result;
}
function sub(){
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;

    let result = Number(n1) - Number(n2);

    document.getElementById("result").innerText = "Result: " + result;
}
function multiply(){
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;

    let result = Number(n1) * Number(n2);

    document.getElementById("result").innerText = "Result: " + result;
}

function divide() {
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;

    if (n2 == 0) {
        document.getElementById("result").innerText = "Enter a valid number";
        return;
    }

    let result = Number(n1) / Number(n2);

    document.getElementById("result").innerText = "Result: " + result;
}
