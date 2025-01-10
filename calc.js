var FirstNumber = "";
var SecondNumber = "";
var operator = "";
var res = "";
function append(number) {
    if (operator === "") {
        FirstNumber += number;
        document.getElementById("result").value = FirstNumber;
    } else {
        SecondNumber += number;
        document.getElementById("result").value = SecondNumber;
    }
}
function setOperator(op) {
    operator = op;
    document.getElementById("result").value = "";
}
function showResult() {
    if (FirstNumber === "" || SecondNumber === "" || operator === "") {
        document.getElementById("result").value = "Error: Invalid Input";
        return;
    }
    switch (operator) {
        case '+':
            res = parseFloat(FirstNumber) + parseFloat(SecondNumber);
            break;
        case '-':
            res = parseFloat(FirstNumber) - parseFloat(SecondNumber);
            break;
        case '*':
            res = parseFloat(FirstNumber) * parseFloat(SecondNumber);
            break;
        case '/':
            if (SecondNumber === "0") {
                res = "Error: Division by Zero";
            } else {
                res = parseFloat(FirstNumber) / parseFloat(SecondNumber);
            }
            break;
        default:
            res = "Error: Unknown Operator";
    }
    document.getElementById("result").value = res;
}
function reset() {
    FirstNumber = "";
    SecondNumber = "";
    operator = "";
    res = "";
    document.getElementById("result").value = "";
    changeBackgroundColor(); 
}
function changeBackgroundColor() {
    const gradients = [
        'linear-gradient(to right, #ff7e5f, #feb47b)',
        'linear-gradient(to right, #00c6ff, #0072ff)',
        'linear-gradient(to right, #f7797d, #c471ed)',
        'linear-gradient(to right, #12c2e9, #c471ed)',
        'linear-gradient(to right, #ff9a9e, #fad0c4)',
        'linear-gradient(to right, #a18cd1, #fbc2eb)',
        'linear-gradient(to right, #fccb90, #d57eeb)'
    ];
    const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
    document.body.style.background = randomGradient;
    document.body.style.transition = "background 0.5s ease-in-out";
}
