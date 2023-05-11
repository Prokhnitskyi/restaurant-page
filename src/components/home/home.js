import './home.scss';
import heroImg from '../../assets/images/hero.webp';
import texts from '../../assets/data/text-resourses.json';

export function getHome() {
  return `
    <section class="hero">
        <h2 class="hero__title">${texts.hero.name}</h2>
        <img src="${heroImg}" alt="Hero image" class="hero__image">
    </section>
    <section class="about">
        ${texts.about.text}
    </section>
    <section class="features">
        <h2 class="features__title">${texts.features.title}</h2>
        <div class="features__grid">
            ${texts.features.cards.map((card) => (
              `<div class="features__item">${card}</div>`
            )).join('')}
        </div>
    </section>
`;
}