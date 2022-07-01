var num1 = 3
var num2 = 4

var calcDisplay = document.getElementById("calculator-display")
var calcOne = document.getElementById("one")
var calcTwo = document.getElementById("two")
var calcThree = document.getElementById("three")
var calcFour = document.getElementById("four")
var calcFive = document.getElementById("five")
var calcSix = document.getElementById("six")
var calcSeven = document.getElementById("seven")
var calcEight = document.getElementById("eight")
var calcNine = document.getElementById("nine")

var calcPlus = document.getElementById("plus")
var calcMinus = document.getElementById("minus")
var calcMult = document.getElementById("multiply")
var calcEqual = document.getElementById("equal")
var calcDecimal = document.getElementById("decimal")
var calcClear = document.getElementById("clear")
var calcDivide = document.getElementById("divide")

var input = "Filler Text"

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
        return sum(num1, num2)
    } else if (operator == '-') {
        return sub(num1, num2)
    } else if (operator == '*') {
        return multiply(num1, num2)
    } else if (operator == '/') {
        return divide(num1, num2)
    }
}

console.log(operate('/', num1, num2))

calcDisplay.innerHTML = input

function fun1() {
    console.log("1")
}

function fun2() {
    console.log("2")
}

function fun3() {
    console.log("3")
}

function fun4() {
    console.log("4")
}

function fun5() {
    console.log("5")
}

function fun6() {
    console.log("6")
}

function fun7() {
    console.log("7")
}

function fun8() {
    console.log("8")
}

function fun9() {
    console.log("9")
}

function funPlus() {
    console.log("+")
}

function funMinus() {
    console.log("-")
}

function funMult() {
    console.log("x")
}

function funEqual() {
    console.log("=")
}

function funDecimal() {
    console.log(".")
}

function funClear() {
    console.log("Clear")
}

function funDivide() {
    console.log("/")
}

calcOne.addEventListener("click", fun1)
calcTwo.addEventListener("click", fun2)
calcThree.addEventListener("click", fun3)
calcFour.addEventListener("click", fun4)
calcFive.addEventListener("click", fun5)
calcSix.addEventListener("click", fun6)
calcSeven.addEventListener("click", fun7)
calcEight.addEventListener("click", fun8)
calcNine.addEventListener("click", fun9)

calcPlus.addEventListener("click", funPlus)
calcMinus.addEventListener("click", funMinus)
calcMult.addEventListener("click", funMult)
calcEqual.addEventListener("click", funEqual)
calcDecimal.addEventListener("click", funDecimal)
calcClear.addEventListener("click", funClear)
calcDivide.addEventListener("click", funDivide)