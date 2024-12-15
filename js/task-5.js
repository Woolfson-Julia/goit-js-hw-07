function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector('.js-change-color');
const spanColorEl = document.querySelector('.js-color');
const bodyEl = document.querySelector('body');

const onClick = () => {
  spanColorEl.style.backgroundColor = getRandomHexColor();
  bodyEl.style.backgroundColor = getRandomHexColor();
};

btnEl.addEventListener("click", onClick);
