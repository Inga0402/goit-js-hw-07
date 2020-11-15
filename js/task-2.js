const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listRef = document.querySelector('ul#ingredients');

const elementRef1 = document.createElement('li');
elementRef1.textContent = ingredients[0];

const elementRef2 = document.createElement('li');
elementRef2.textContent = ingredients[1];

const elementRef3 = document.createElement('li');
elementRef3.textContent = ingredients[2];

const elementRef4 = document.createElement('li');
elementRef4.textContent = ingredients[3];

const elementRef5 = document.createElement('li');
elementRef5.textContent = ingredients[4];

const elementRef6 = document.createElement('li');
elementRef6.textContent = ingredients[5];

listRef.append(elementRef1, elementRef2, elementRef3, elementRef4, elementRef5, elementRef6);
console.log(listRef);

