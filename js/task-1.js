const ulEl = document.querySelector('#categories');
const itemEl = [...document.querySelectorAll('.js-item')];
const ulListEl = `Number of categories: ${ulEl.children.length}`;
console.log(ulListEl);

itemEl.forEach(item => {
  const titleEl = item.children[0];
  if (titleEl.classList.contains('js-title')) {
    console.log(`Category: ${titleEl.textContent}`);
  }
  const itemEl = item.children[1];
  if (itemEl.classList.contains('js-list')) {
    console.log(`Elements: ${itemEl.children.length}`);
  }
});




