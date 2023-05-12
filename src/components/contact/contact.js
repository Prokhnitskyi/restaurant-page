import './contact.scss';
import texts from '../../assets/data/text-resourses.json';

export function getContacts () {
  return `<section class="contacts">
            <div class="contacts__container">
                <h2 class="contacts__title">Contact us</h2>
                <div class="contacts__map"></div>
            </div>
          </section>`;
}