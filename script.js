// define initial vals and variables
const opperators = document.querySelectorAll(".btn__btn-opperator");
const numbers = document.querySelectorAll(".btn__btn-num");
const equalsToButton = document.querySelector("#equal");
const allClearButton = document.querySelector("#clear");
const percentButton = document.querySelector("#percent");
const plusMinusButton = document.querySelector("#plusMinus");
let screenDisplay = document.querySelectorAll(".calculator__screen")[0];

//has the user clicked equals to get a result
let isResultDisplayed = false;

// add listeners by iterating over all number buttons
for(let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", (event) => {
        //listener waits for click event to fire. When it does, the event data 
        //is passed to this function, to be completed.
        
        let currentStringOnScreen = screenDisplay.innerHTML;
        let lastCharacter = currentStringOnScreen[currentStringOnScreen.length - 1];

        if(screenDisplay.innerHTML.length < 9) {
            screenDisplay.innerHTML += event.target.innerHTML;
        }

    });
}

// add listeners for operand buttons
for(let i = 0; i < opperators.length; i++) {
    opperators[i].addEventListener("click", (event) => {
        
        console.log(`${opperators[i]} was clicked`);

        let currentStringOnScreen = screenDisplay.innerHTML;
        let lastCharacter = currentStringOnScreen[currentStringOnScreen.length - 1];

        //if the screen has no text, do not allow the opperator to display (maybe add a console message)
        if(screenDisplay.innerHTML.length === 0) {
            console.log("cannot add opperator before number");
        }
        // else if an operator is the last character, replace it with the new character
        else if(lastCharacter === "+" || lastCharacter === "-" || lastCharacter === "x" || lastCharacter === "/" ) {
            screenDisplay.innerHTML = currentStringOnScreen.substring(0, currentStringOnScreen.length - 1) + event.target.innerHTML;
        }
        //else calculate the value and append new operator
        else{
            screenDisplay.innerHTML = calculateEquation(screenDisplay.innerHTML) + event.target.innerHTML;
        }
        
    });
}

// add event listeneres for functions
// add single event listener for equals
//  - this is where all the main calculations will happen
equalsToButton.addEventListener("click", (event) => {
    console.log("equals button was clicked");
    screenDisplay.innerHTML = calculateEquation(screenDisplay.innerHTML);

})

// add listener for clear
allClearButton.addEventListener("click", (event) => {
    console.log("AC button cleared display")
    screenDisplay.innerHTML = "";
    isResultDisplayed = false;
});

// ADD PERCENTAGE FUNCTION AND LISTENER TO CALCULATOR //////////////////////////////////
const calculatePercentage = (stringOnScreen) => {
    return parseFloat(stringOnScreen) / 100;
}

percentButton.addEventListener("click", (event) => {
    
    screenDisplay.innerHTML = calculatePercentage(screenDisplay.innerHTML);
})

// ADD PLUSMINUS FUNCTION AND LISTENER /////////////////////////////////////////////////
const changeToNegative = (stringOnScreen) => {
    return parseFloat(stringOnScreen) * (-1); 
}

plusMinusButton.addEventListener("click", (event) => {
    screenDisplay.innerHTML = changeToNegative(screenDisplay.innerHTML);

// CANT MAKE THE NEGATIVE NUMBER WORK WITH OPPERAND CAUSE OF 2 "-" SIGNS
})

// calculate /x-+ function /////////////////////////////////////////////////////////////
const calculateEquation = (stringOnScreen) => {       
    let resultNum = "";
 
    //split the stringOnScreen parameter based on the operand (+, -, x, /)

    //set firstNum, operator and secondNum

    //divide
    if (stringOnScreen.includes("/")) {
        let splitString = stringOnScreen.split("/");
        if(splitString.length > 1){
            resultNum = parseFloat(splitString[0]) / parseFloat(splitString[1]);
        }
    }
    //multiply
    else if (stringOnScreen.includes("*")) {
        let splitString = stringOnScreen.split("*");
        if(splitString.length > 1){
            resultNum = parseFloat(splitString[0]) * parseFloat(splitString[1]);
        }
    }
    //subtract
    else if (stringOnScreen.includes("-")) {
        let splitString = stringOnScreen.split("-");
        if(splitString.length > 1){
            resultNum = parseFloat(splitString[0]) - parseFloat(splitString[1]);
        }
    }
    //add
    else if (stringOnScreen.includes("+")) {
        let splitString = stringOnScreen.split("+");
        if(splitString.length > 1){
            resultNum = parseFloat(splitString[0]) + parseFloat(splitString[1]);
        }
    }
    else{
        return stringOnScreen;
    }
    isResultDisplayed = true;
   
    return resultNum.toString().substring(0,11);
};