const inputRef = document.querySelector("#font-size-control");
const spanTextRef = document.querySelector("#text");


inputRef.addEventListener("input", (event) => {
    const range = inputRef.value;
    console.log(`Розмір шрифту буде ${range}`);

    spanTextRef.style.fontSize = `${event.currentTarget.value}px`
})



    
