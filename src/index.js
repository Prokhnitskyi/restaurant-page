import './styles/style.scss';
import texts from './assets/data/text-resourses.json';
import headerLogo from './assets/images/logo.svg';
import { renderPage } from './utility';
import { getHome } from './components/home/home';
import { getMenu } from './components/menu/menu';

const pages = {
  'Home': getHome(),
  'Menu': getMenu()
}

function getHeader () {
  const menu = getNavMenu();
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

function getNavMenu () {
  return `<nav class="nav-menu">
    <ul class="nav-menu__list">${texts.navMenu.map((item) => (
    `<li class="nav-menu__item"><a href="${item.href}" class="nav-menu__link" data-page="${item.page}">${item.name}</a></li>`
  )).join('')}</ul>
</nav>`;
}

function getMain (pageContent = '') {
  return `<main class="main">${pageContent}</main>`;
}

function getFooter () {
  return `<footer class="footer"><div class="footer__made-by">${texts.footer.madeBy}</div></footer>`;
}

function initHandlers() {
  const links = document.querySelectorAll('.nav-menu__link');
  links.forEach((link) => {
    link.addEventListener('click', navigateToPage);
  });
}

function navigateToPage (event) {
  event.preventDefault();
  renderPage([getHeader(),getMain(pages[this.dataset.page]),getFooter()], initHandlers);
}

renderPage([getHeader(), getMain(getHome()), getFooter()], initHandlers);
//renderPage([getHeader(), getMain(getMenu()), getFooter()]);