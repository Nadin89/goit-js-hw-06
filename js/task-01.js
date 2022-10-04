const categoryRef = document.querySelectorAll('.item');
// console.log(categoryRef);

console.log(`Number of categories: ${categoryRef.length}`);



const categoryTitleRef = document.querySelectorAll('.item h2');


console.log(`Category: ${categoryTitleRef[0].textContent}`);
const categoryItemsRef = document.querySelectorAll('ul')[1];
const itemsRef = categoryItemsRef.querySelectorAll('li');
console.log(`Elements: ${itemsRef.length}`);


console.log(`Category: ${categoryTitleRef[1].textContent}`);
const categoryItems2Ref = document.querySelectorAll('ul')[2];
const items2Ref = categoryItems2Ref.querySelectorAll('li');
console.log(`Elements: ${items2Ref.length}`);

console.log(`Category: ${categoryTitleRef[2].textContent}`);
const categoryItems3Ref = document.querySelectorAll('ul')[3];
const items3Ref = categoryItems3Ref.querySelectorAll('li');
console.log(`Elements: ${items3Ref.length}`);