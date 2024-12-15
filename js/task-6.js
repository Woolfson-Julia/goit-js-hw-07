function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputEl = document.querySelector('.js-input');
const divBoxes = document.querySelector('#boxes');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');


const createBoxes = (amount) => {
  if (amount > 0 && amount <= 100) {
    divBoxes.innerHTML = '';
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < amount; i++) {
      const newDiv = document.createElement('div');
      newDiv.classList.add('box');
      newDiv.style.backgroundColor = getRandomHexColor();

      const sizeDiv = 30 + i * 10;
      newDiv.style.width = `${sizeDiv}px`;
      newDiv.style.height = `${sizeDiv}px`;
      fragment.append(newDiv);
    }
    
    divBoxes.append(fragment);
    inputEl.value = '';
  }
};
const onCreate = () => {
const numBoxes = Number(inputEl.value);
  createBoxes(numBoxes);
}

const onDestroy = () => {
  divBoxes.innerHTML = '';
}

btnCreate.addEventListener("click", onCreate);

btnDestroy.addEventListener("click", onDestroy);

