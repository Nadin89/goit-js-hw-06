const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
  ];
  const listRef  = document.querySelector('#ingredients');

  const elements = ingredients.map(el => {
    const li = document.createElement('li');
    li.textContent = el;
    li.classList.add("item");

    console.log(li);
    return li
 });

 listRef.append(...elements);



  
