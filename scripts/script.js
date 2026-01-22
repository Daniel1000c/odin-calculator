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
    }
}

// console.log(operation('/',10,4))