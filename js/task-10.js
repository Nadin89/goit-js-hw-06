function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  const inputRef = document.querySelector("input");
  const btnCreateRef = document.querySelector("button[data-create]");
  const btnDestroyRef = document.querySelector("button[data-destroy]");
  const mainDivRef = document.querySelector("#boxes");

  let sizes = 30;

const massive = [];
  inputRef.addEventListener("input", (event) => {
          
          for (let i = 0; i < event.currentTarget.value; i += 1) {

            const divRef = document.createElement("div");
            divRef.classList.add("box__class");
            divRef.style.width = `${sizes}px`;
            divRef.style.height = `${sizes}px`;
            divRef.style.backgroundColor = getRandomHexColor();
            sizes += 10;

            massive.push(divRef);
            console.log(massive);
          };

          btnCreateRef.addEventListener("click", (evt) => {
            mainDivRef.append(...massive);
            console.log(mainDivRef);
          });
// const boxRef = document.querySelector("box__class");

          btnDestroyRef.addEventListener("click", (evt) => {
            while (mainDivRef.hasChildNodes()) {
              mainDivRef.removeChild(mainDivRef.firstChild);
            }
            })
          })







// // Створюємо посилання на наші вузли
//   const inputRef = document.querySelector("input");
//   const btnCreateRef = document.querySelector("button[data-create]");
//   const btnDestroyRef = document.querySelector("button[data-destroy]");
//   const mainDivRef = document.querySelector("#boxes");

//   // Створюємо нові div і прописуємо їх властивості

//   const divList = document.createElement("div");

//   const divRef = document.createElement("div");
//   divRef.width = 30;
//   divRef.height = 30;
//   divRef.backgroundColor = randomColor;

//   const nextDivRef = document.createElement("div");
//   divRef.width = 30 + divList.length * 10;
//   divRef.height = 30 + divList.length * 10;
//   divRef.backgroundColor = randomColor;

//   // Прослуховуємо подію інпута і записуємо у змінну amount кількість боксів, яку нам треба створити
//   inputRef.addEventListener("input", (event) => {
//     // console.log(event.currentTarget.value);
//      let amount = event.currentTarget.value;
//      console.log(amount);
//   // Викликаємо функцію, яка до створеного нами div прикріплює інші нові div (виноградна гроздь)
//     function createBoxes(amount) {
//       divList.append(divRef);
//       console.log(divList);
// //   За умови, що кількість елементів в нашому div менша, ніж значення нашого amount - знову викликаємо цю функцію і прив'язуємо ще один дів
//        if(divList.length < amount) {
//         divList.append(nextDivRef);
//        }
//     }
// //  Прослуховуємо клік по кнопці Створити і приривнюємо наш div, до якого прив'язали необхідну кількість інших div, до div#boxes.
//      btnCreateRef.addEventListener("click", (event) => {
//       divList = mainDivRef;
//     })
//     });
  