function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  const spanColor = document.querySelector(".color");
  const btnChangeColor = document.querySelector('.change-color');

  btnChangeColor.addEventListener("click", (event) => {
  
    const randomColor= getRandomHexColor();
    
    spanColor.textContent = randomColor;
    
    document.body.style.backgroundColor = randomColor;
  })
  