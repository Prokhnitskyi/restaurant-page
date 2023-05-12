import './contact.scss';
import texts from '../../assets/data/text-resourses.json';

export function getContacts () {
  return `<section class="contacts">
            <div class="contacts__container">
                <h2 class="contacts__title">${texts.contacts.title}</h2>
                <address class="contacts__address">${texts.contacts.address}</address>
                <div class="contacts__map" id="map"></div>
            </div>
          </section>`;
}
