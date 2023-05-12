import './menu.scss';
import texts from '../../assets/data/text-resourses.json';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}
const images = importAll(require.context('../../assets/images/foods', false, /\.webp$/));

export function getMenu () {
  return `<section class="menu">
        <h2 class="menu__title">${texts.menu.title}</h2>
        <div class="menu__grid">
            ${texts.menu.foods.map((food, index) => (
              `<div class="menu__item">
                    <img src="${images[`item-${index}.webp`]}" alt="Food image" class="menu__image">
                    <h3 class="menu__item-name">${food.name}</h3>
                    <p class="menu__item-description">${food.description}</p>
                </div>`
            )).join('')}
        </div>
    </section>`;
}