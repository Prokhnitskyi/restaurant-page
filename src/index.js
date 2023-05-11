import './styles/style.scss';
import texts from './assets/data/text-resourses.json';
import headerLogo from './assets/images/logo.svg';

const container = document.querySelector('.content');

function getHeader () {
  const menu = getMenu();
  return `<header class="header">
                        <div class="wrapper">
                            <div class="header__logo">
                                <img src="${headerLogo}" alt="${texts.header.logoAltText}" class="header__logo-img">
                                <h1 class="header__title">${texts.header.name}</h1>
                            </div>
                            ${menu || ''}
                        </div>
                    </header>`;
}

function getMenu () { // todo make active page without link
  return `<nav class="menu">
    <ul class="menu__list">${texts.menu.map((item) => (
      `<li class="menu__item"><a href="${item.href}" class="menu__link">${item.name}</a></li>`
    )).join('')}</ul>
</nav>`;
}

function getMain () {
  return `<main class="main"></main>`;
}

function getFooter () {
  return `<footer class="footer"><div class="footer__made-by">${texts.footer.madeBy}</div></footer>`;
}

container.innerHTML = getHeader() + getMain() + getFooter();