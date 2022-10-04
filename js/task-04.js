
const BtnDecrementRef = document.querySelector('button[data-action="decrement"]');
const BtnIncrementRef = document.querySelector('button[data-action="increment"]');
const baseValueRef = document.querySelector('#value');

let counterValue = 0;


BtnDecrementRef.addEventListener ('click', (event) => {
    counterValue -= 1;
    baseValueRef.textContent = counterValue;
    // console.log("клик -");
});

BtnIncrementRef.addEventListener ('click', (event) => {
    counterValue += 1;
    baseValueRef.textContent = counterValue;
    // console.log("клик +");
});