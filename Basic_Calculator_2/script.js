function calculate(op){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let result;

    if(isNaN(n1) || isNaN(n2)){
        document.getElementById("result").innerText = "Enter valid numbers";
        return;
    }

    if(op === '+'){
        result = n1 + n2;
    }
    else if(op === '-'){
        result = n1 - n2;
    }
    else if(op === '*'){
        result = n1 * n2;
    }
    else if(op === '/'){
        if(n2 === 0){
            document.getElementById("result").innerText = "Cannot divide by zero";
            return;
        }
        result = n1 / n2;
    }

    document.getElementById("result").innerText = "Result: " + result;
}