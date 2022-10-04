const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
  ];


  const ingridientRef = document.createElement('li');
  ingridientRef.textContent = `${ingredients[0]}`;
  ingridientRef.classList.add('item');
  console.log(ingridientRef);

  const ingridient2Ref = document.createElement('li');
  ingridient2Ref.textContent = `${ingredients[1]}`;
  ingridient2Ref.classList.add('item');
  console.log(ingridient2Ref);

  const ingridient3Ref = document.createElement('li');
  ingridient3Ref.textContent = `${ingredients[2]}`;
  ingridient3Ref.classList.add('item');
  console.log(ingridient3Ref);

  const ingridient4Ref = document.createElement('li');
  ingridient4Ref.textContent = `${ingredients[3]}`;
  ingridient4Ref.classList.add('item');
  console.log(ingridient4Ref);

  const ingridient5Ref = document.createElement('li');
  ingridient5Ref.textContent = `${ingredients[4]}`;
  ingridient5Ref.classList.add('item');
  console.log(ingridient5Ref);

  const ingridient6Ref = document.createElement('li');
  ingridient6Ref.textContent = `${ingredients[5]}`;
  ingridient6Ref.classList.add('item');
  console.log(ingridient6Ref);


  const markUpRef  = document.querySelector('#ingredients');
  markUpRef.append(ingridientRef, ingridient2Ref, ingridient3Ref, ingridient4Ref, ingridient5Ref, ingridient6Ref);

  // console.log(ingredients[1]);
