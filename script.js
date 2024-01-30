let displayValue = '0';
let currentInput = '';
let operator = '';
function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}
function clearDisplay() {
    displayValue = '0';
    currentInput = '';
    operator = '';
    updateDisplay();
}
function appendNumber(number) {
    if (displayValue === '0' || operator === '='){
        displayValue = number;
    }else{
        displayValue += number;
    }
    currentInput = displayValue;
    operator = '';
    updateDisplay();
}
function appendSymbol(symbol){
    if(operator === '='){
        currentInput === '';
    }
    displayValue = '0';
    operator = symbol;
}
function calculateResult(){
    if(currentInput !== ''){
        displayValue = eval(currentInput).toString();
        currentInput = displayValue;
        operator = '=';
        upddateDisplay();
    }
}
document.addEventListener('DOMContentLoaded',() => {
    updateDisplay();
});