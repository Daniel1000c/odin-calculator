/*
    CALCULATOR ELEMENTS
*/

const display = document.getElementById('output');
const buttons = document.querySelectorAll('button');

/*
    FUNCTIONS
*/

//Addition
function addition(firstNum, secondNum) {
    return firstNum + secondNum;
}
//Subtraction
function subtraction(firstNum, secondNum) {
    return firstNum - secondNum;
}
//Multiply
function multiply(firstNum, secondNum) {
    return firstNum * secondNum;
}
//Divide
function divide(firstNum, secondNum) {
    return firstNum / secondNum;
}
//Modulus
function modulus(firstNum, secondNum) {
    return firstNum % secondNum;
}

/*
    INPUT VARIABLES
*/
let firstInput, secondInput, operator;

/*
    OPERATION FUNCTION
*/
function operation(operation, firstNumber, secondNumber) {
    //Create switch statement to call operation functions
    switch(operation) {
        case '+':
            //Call Addition function
            return addition(firstNumber, secondNumber);
        case '-':
            //Call subtraction function
            return subtraction(firstNumber, secondNumber);
        case '*':
            //Call multiply function
            return multiply(firstNumber, secondNumber);
        case '/':
            //Call divide function
            return divide(firstNumber, secondNumber);
        case '%':
            //Call modulus function
            return modulus(firstNumber, secondNumber);
        default: 
            return alert('ERROR!!! Operator not recognized.');
    }
}


/*
    EVENT LISTENERS
*/

buttons.forEach(button => {
    ///Create button listener for each button
    button.addEventListener('click', function() {
        const number = this.dataset.number;
        const operatorClicked = this.dataset.operator;
        const action = this.dataset.action;

        //Create if statement to handle number input
        if(number !== undefined) {
            //If no operator check for first number
            if(!operator) {
                //Assign number to first input
                if(!firstInput) {
                    firstInput = number
                } else {
                    //Append to first input if exists
                    firstInput += number;
                }

                //Add first input to display
                console.log(display.textContent = firstInput, 'firstinput');
            } else {
                //Check for second input
                if(!secondInput) {
                    secondInput = number;
                } else {
                    //Append to second input if exists
                    secondInput +=number
                }

                //Add second input to display
                console.log(display.textContent = secondInput, 'second input');
            }
        }
    });
});
