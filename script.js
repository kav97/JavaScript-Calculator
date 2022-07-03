// define initial vals and variables
const numberButton = document.querySelector(".btn__btn-num, .btn__btn-num-0")
const opperatorButton = document.querySelector(".btn__btn-opperator")
const equalsToButton = document.querySelectorAll("#equal")
const screenDisplay = document.querySelectorAll(".calculator__screen");
const allClearButton = document.querySelector("#clear")

let firstNum = 0;
let secondNum = 0;
let resultNum = 0;
let opperator = undefined;

// define the functions needed to carry out all the problems //////////////////////////
// clear function /////////////////////////////////////////////////////////////////////

// sign function //////////////////////////////////////////////////////////////////////

// calculate /x-+% function ////////////////////////////////////////////////////////////
const calculateEquation = () => {       

    //divide
    if (opperator == "/") {
        resultNum = firstNum / secondNum;
    
    //multiply
    } else if (opperator == "x") {
        resultNum = firstNum * secondNum;
    
    //subtract
    } else if (opperator == "-") {
        resultNum = firstNum - secondNum;

    //add
    } else if (opperator = "+") {
        resultNum = firstNum + secondNum;
    
    //percentage
    } else if (opperator = "%") {
        resultNum = firstNum / 100;
    }

    return resultNum;
};

// convert to percentage function /////////////////////////////////////////////////////

// function that equates and joins it all together??? idk//////////////////////////////

// add event triggers that reads input, performs the action and returns an output /////