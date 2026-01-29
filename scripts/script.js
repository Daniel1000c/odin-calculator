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
    //Create if statement if user divides by zero
    if(secondNum === 0 || isNaN(secondNum)) {
        //Return an error
        alert("Can't Divide by 0, No sneaky moves:)") ;
    } else {
        return firstNum / secondNum;
    }
}
//Modulus
function modulus(firstNum, secondNum) {
    return firstNum % secondNum;
}

/*
    INPUT VARIABLES
*/
let firstInput = '';
let secondInput = '';
let operator = null;

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

        //Check if number input
        if(number !== undefined) {
            //Handle decimal separately
            if(number === '.' && !operator) {
                //Prevent multiple decimals in first input
                if(!firstInput.includes('.')) {
                    firstInput += number;
                }
            } else if(number === '.' && operator) {
                //Prevent multiple decimals in second input
                if(!secondInput.includes('.')) {
                    secondInput += number;
                }
            } else {
                //Regular number input
                if(!operator) {
                    firstInput += number;
                } else {
                    secondInput += number;
                }
            }

            //Update display
            display.textContent = firstInput + (operator ? ' ' + operator + ' ' + secondInput : '');
        }

        //Create if statement for operator input
        if(operatorClicked !== undefined) {

            //Check if first, second input & operator are assigned 
            if(firstInput && operator && secondInput) {
                //Convert first and second input into numbers
                const firstNumberInput = +firstInput;
                const secondNumberInput = +secondInput;

                //Calculate result 
                const finalResult = operation(operator, firstNumberInput, secondNumberInput);

                firstInput = finalResult.toString();
                secondInput = '';
            }

            //Assign button value to operator
            operator = operatorClicked;

            display.textContent = firstInput + " " + operator;
        }        

        //Create switch statement
        switch(action) {
            case 'equals':
                //Check if user presses equal sign early
                if(!firstInput || !secondInput || !operator) return;

                //Turn first and second input into numbers
                firstNumInput = +firstInput;
                secondNumInput = +secondInput;

                //Call the operation function in result variable
                const result = operation(operator, firstNumInput, secondNumInput);

                //Show result in display container
                display.textContent = result;

                if(typeof result === 'number') {
                    //Set result to first input, clear out second input and set operator to null
                    firstInput = result.toString();
                    secondInput = '';
                    operator = null;    
                } else {
                    secondInput = '';
                    operator = null;
                }    
                break;
            case 'delete':
                if(!operator) {
                    firstInput = firstInput.slice(0,-1);
                    display.textContent = firstInput || '0';
                } else {
                    secondInput = secondInput.slice(0,-1);
                    display.textContent = secondInput;
                }   
                break;
            case 'clear':
                //Rest variables and display
                firstInput = '';
                secondInput = '';
                operator = null;
                display.textContent = '';
                break;
        }        
    });
});
