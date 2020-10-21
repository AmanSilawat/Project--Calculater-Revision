// Elements
const calcWrap = document.querySelectorAll('#calc-buttons .calc-button');
const displayCalc = document.querySelector('#calc #screen');

for (const node of calcWrap) {
    node.addEventListener('click', pressBtn);
}

function pressBtn(event) {
    const targetEle = event.target;
    const targetEleTxt = targetEle.dataset.calc;
    const displayCalcTxt = displayCalc.innerHTML;

    if (displayCalcTxt == '0') {
        displayCalc.innerHTML = targetEleTxt;
    } else {
        displayCalc.innerHTML += targetEleTxt;
    }
}
