const categorysRef = document.querySelectorAll('li.item');

const categorysList = `В списке ${categorysRef.length} категории.`;
console.log(categorysList);

categorysRef.forEach((category) => {
const titleCategorys = category.querySelector('h2');
const quantityCategorys = category.querySelectorAll('li');
const title = `Категория: ${titleCategorys.textContent}\nКоличество элементов: ${quantityCategorys.length} `;
console.log(title);
});



