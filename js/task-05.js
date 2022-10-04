const inputRef = document.querySelector("#name-input");
const spanInputRef = document.querySelector("#name-output");
spanInputRef.textContent = 'Anonymous';

inputRef.addEventListener("input", (event) => {
    // console.log(event.currentTarget.value);

    spanInputRef.textContent = event.currentTarget.value;
    
    if (event.currentTarget.value === '') {
        spanInputRef.textContent = 'Anonymous';
        }       
})