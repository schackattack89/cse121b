/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1+number2;
}

function addNumbers(){
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2){
    return number1-number2;
}

const subtractNumbers = function(){
    let subtract1 = Number(document.querySelector('#subtract1').value);
    let subtract2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtract1, subtract2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */
const product = (factor1, factor2) => factor1*factor2
const multiply = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = factor1*factor2;
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiply);


/* Open Function Use - Divide Numbers */
function divide(number1, number2){
    return number1/number2;
}

function divideNumbers(){
    let addNumber1 = Number(document.querySelector('#dividend').value);
    let addNumber2 = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(addNumber1, addNumber2);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);


/* Decision Structure */
function total(number1, number2){
    return number1*number2;
}

function totalValue(){
    let subtotal = Number(document.querySelector('#subtotal').value);
    let discoutedTotal = 1;
    if (document.querySelector('#member').checked){
        discoutedTotal = 0.85
    }
    var newTotal = subtotal*discoutedTotal;
    let textTotal = newTotal.toString();
    let dollarPart = textTotal.split('.')[0];
    let decimalPart = textTotal.split('.')[1];
    if(decimalPart == null){
        decimalPart = "00";
    }
    decimalPart = decimalPart.substring(0, 2);
    if(decimalPart[1] == null){
        decimalPart = decimalPart+'0';
    }
    document.querySelector("#total").innerHTML = '$'+dollarPart+'.'+decimalPart;
    
}

document.querySelector('#getTotal').addEventListener('click', totalValue);


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector('#array').innerHTML = numbersArray;

/* Output Odds Only Array */
let oddArray = numbersArray.filter((numbersArray) => numbersArray%2 == 1);
document.querySelector('#odds').innerHTML = oddArray;

/* Output Evens Only Array */
let evenArray = numbersArray.filter((numbersArray) => numbersArray%2 == 0);
document.querySelector('#evens').innerHTML = evenArray;

/* Output Sum of Org. Array */
let sumArray = numbersArray.reduce((sum, number) => sum + number);
document.querySelector('#sumOfArray').innerHTML = sumArray;

/* Output Multiplied by 2 Array */
let twiceArray = numbersArray.map(number => number*2);
document.querySelector('#multiplied').innerHTML = twiceArray;
/* Output Sum of Multiplied by 2 Array */
let sumTwiceArray = twiceArray.reduce((sum, number) => sum + number);
document.querySelector('#sumOfMultiplied').innerHTML = sumTwiceArray;