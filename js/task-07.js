const inputRef = document.querySelector("#font-size-control");

inputRef.addEventListener("input", () => {
    const range = inputRef.value;
    console.log(`Розмір шрифту буде ${range}`);
})
