//number button
//button pressed,log in the console,
//shown in the display
//querySelectorAll .class
//store the first number before click on operate button
//store the operator
//start the second number
//click =  store  second number
//calculate get result shown in display

const getNumber = document.querySelectorAll(".btn__btn-num, .btn__btn-num-0")
const getOperator = document.querySelectorAll(".btn__btn-opperator")
const getEquals = document.querySelector("#equal")
const getScreenDisplay = document.querySelector(".main__calculation-textbox");
const getAllClear = document.querySelector("#keypad-clear")

let num1 = ""
let num2 = ""
let num3 = ""


function calcFunction() {
    if (num2 == "*") {
        getScreenDisplay.value = num1 * num3;
    } else if (num2 == "/") {
        getScreenDisplay.value = num1 / num3;
    } else if (num2 == "-") {
        getScreenDisplay.value = num1 - num3;
    } else if (num2 == "+") {
        getScreenDisplay.value = num1 + num3;
    } 
    num2 = ""
}
