// Get Elements
const calcWrap = document.querySelectorAll('#calc-buttons .calc-button');
const displayCalc = document.querySelector('#screen');

let operand = [];
let operator;

// Add click event on each button
for (const node of calcWrap) {
    node.addEventListener('click', pressBtn);
}

// press any button on calculator than run run this function 
function pressBtn(event) {
    const targetEle = event.target;
    const targetEleTxt = targetEle.dataset.calc;

    // Clear Button
    if (targetEleTxt == 'C') {
        displayCalc.innerHTML = 0;
        operator = undefined;
        operand = [];
        return;
    }

    // Back button
    if (targetEleTxt == '←') {
        if (displayCalc.innerHTML != 0) {
            let str = displayCalc.innerHTML;
            let evalVal = str.substring(0, str.length - 1);
            if (evalVal.length == 0) {
                displayCalc.innerHTML = 0;
            } else {
                displayCalc.innerHTML = evalVal;
            }
        }
        return;
    }

    // EqualTo Button
    if (targetEleTxt == '=') {
        if (operand.length != 0) {
            handleTotal(operator);
            displayCalc.innerHTML = operand[0];
            operand = [];
        }

        return;
    }

    // Operator buttons
    if (
        targetEleTxt == '+' ||
        targetEleTxt == '-' ||
        targetEleTxt == '*' ||
        targetEleTxt == '/'
    ) {
        operator = targetEleTxt;
        handleTotal(operator);
        return;
    }

    // Number buttons
    if (
        displayCalc.innerHTML == '0' &&
        typeof Number(targetEleTxt) == 'number'
    ) {
        displayCalc.innerHTML = Number(targetEleTxt);
    } else {
        displayCalc.innerHTML += Number(targetEleTxt);
    }
}

// Calculation validation
function handleTotal(operator) {
    disTxt = displayCalc.innerHTML;

    if (disTxt != '0') {
        operand.push(Number(disTxt));
        displayCalc.innerHTML = 0;
    }

    if (operand.length == 2) {
        methOperation(operator);
    }
}

// Calculation process
function methOperation(operator) {
    let x = operand.shift();
    let y = operand.shift();

    operand.push( eval(`${x} ${operator} ${y}`) );
    
    operator = undefined;
}
