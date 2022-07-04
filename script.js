// define initial vals and variables
const opperators = document.querySelectorAll(".btn__btn-opperator");
const numbers = document.querySelectorAll(".btn__btn-num");
const equalsToButton = document.querySelector("#equal");
const allClearButton = document.querySelector("#clear");
let screenDisplay = document.querySelectorAll(".calculator__screen")[0];

//has the user clicked equals to get a result
let isResultDisplayed = false;

//add listeners by iterating over all number buttons
for(let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function(event) {
        //listener waits for click event to fire. When it does, the event data 
        //is passed to this function, to be completed.
        
        let currentStringOnScreen = screenDisplay.innerHTML;
        let lastCharacter = currentStringOnScreen[currentStringOnScreen.length - 1];

        if(isResultDisplayed === false && screenDisplay.innerHTML.length < 9){
            screenDisplay.innerHTML += event.target.innerHTML;
        }

    });
}

//add listener for clear
allClearButton.addEventListener("click", function(event) {
    console.log("AC button cleared display")
    screenDisplay.innerHTML = "";
    isResultDisplayed = false;
});

//add listeners for operand buttons
for(let i = 0; i < opperators.length; i++) {
    opperators[i].addEventListener("click", function(event) {
        
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
        //else add the operator to the screen
        else if(isResultDisplayed === false && screenDisplay.innerHTML.length < 9) {
            screenDisplay.innerHTML += event.target.innerHTML;
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

// define the functions needed to carry out all the problems //////////////////////////
// clear function /////////////////////////////////////////////////////////////////////

// sign function //////////////////////////////////////////////////////////////////////

// calculate /x-+% function ////////////////////////////////////////////////////////////
const calculateEquation = (stringOnScreen) => {       
    let firstNum = 0;
    let secondNum = 0;
    let resultNum = 0;
 
    //split the stringOnScreen parameter based on the operand (+, -, x, /)

    //set firstNum, operator and secondNum

    //divide
    if (stringOnScreen.includes("/")) {
        let splitString = stringOnScreen.split("/");
        firstNum = splitString[0];
        secondNum = splitString[1];
        resultNum = firstNum / secondNum;
    }
    //multiply
   
    //subtract
   
    //add
   
    //percentage
    isResultDisplayed = true;
   
    return resultNum;
};

// convert to percentage function /////////////////////////////////////////////////////

// function that equates and joins it all together??? idk//////////////////////////////

// add event triggers that reads input, performs the action and returns an output /////