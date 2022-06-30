var num1 = 3
var num2 = 4

function sum(num1, num2){
    return num1 + num2
}

function sub(num1, num2){
    return num1 - num2
}

function multiply(num1, num2){
    return num1 * num2
}

function divide(num1, num2){
    return num1 / num2
}

function operate(operator, num1, num2){
    if (operator == '+') {
        sum(num1, num2)
        console.log("I work!")
        console.log(num2)
    }
}

console.log(operate('+', num1, num2))