const inputRef = document.querySelector('#validation-input');
console.log(inputRef);


inputRef.addEventListener("blur", (event) =>{
    console.log(event.currentTarget.value.length);

    if (event.currentTarget.value.length == inputRef.dataset.length) {
        inputRef.classList.remove("invalid");
        inputRef.classList.add("valid");
    } else {
        inputRef.classList.add("invalid");
        inputRef.classList.remove("valid");

    }

});
