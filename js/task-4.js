const counterIncrementBtn = document.querySelector('[data-action="increment"]');

const counterDecrementBtn = document.querySelector('[data-action="decrement"]');

const counterSpan = document.querySelector('#value');

let counterValue = 0;

const increment = () => {
  counterValue += 1;
  counter.textContent = counterValue;
}

const decrement = () => {
  counterValue -= 1;
  counter.textContent = counterValue;
}

incrBtnRef.addEventListener('click', increment);
decrBtnRef.addEventListener('click', decrement);


