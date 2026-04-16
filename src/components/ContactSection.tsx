import { contact } from '../data';

export function ContactSection(): JSX.Element {
  return (
    <section id="kontakt" className="section" aria-labelledby="kontakt-heading">
      <div className="section-heading-wrap">
        <p className="section-kicker">Kontakt</p>
        <h2 id="kontakt-heading">Mate dotazy nebo chcete pomoct s vyberem kurzu?</h2>
      </div>
      <article className="card contact-card">
        <p>
          Nevahejte nas kontaktovat e-mailem nebo telefonicky. Radi vam doporucime vhodny kurz podle veku ditete a lokality.
        </p>
        <dl>
          <dt>Kontaktni osoba</dt>
          <dd>{contact.person}</dd>
          <dt>Telefon</dt>
          <dd>{contact.phone}</dd>
          <dt>E-mail</dt>
          <dd>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </dd>
          <dt>Facebook</dt>
          <dd>
            <a href={contact.facebookUrl} target="_blank" rel="noreferrer">
              Otevrit profil
            </a>
          </dd>
        </dl>
      </article>
    </section>
  );
}