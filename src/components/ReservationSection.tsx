const courseOptions = [
  'Tanecky pro nejmensi',
  'Tanecky pro deti',
  'Tanecky pro pokrocile',
  'Pohybovky s Danem',
  'Taekwondo pro rodice s detmi',
  'Tanecni krouzek pro deti'
];

export function ReservationSection(): JSX.Element {
  return (
    <section id="rezervace" className="section" aria-labelledby="rezervace-heading">
      <div className="section-heading-wrap">
        <p className="section-kicker">Rezervace</p>
        <h2 id="rezervace-heading">Vytvorte rezervaci na oblibeny kurz</h2>
      </div>
      <p className="reservation-intro">
        Vyberte kurz a poslete kontakt. Po odeslani formulare vas budeme kontaktovat s dalsimi kroky k potvrzeni mista.
      </p>
      <form className="reservation-form" onSubmit={(event) => event.preventDefault()}>
        <label>
          Jmeno a prijmeni
          <input type="text" name="name" required />
        </label>
        <label>
          Telefonni cislo
          <input type="tel" name="phone" required />
        </label>
        <label>
          E-mail
          <input type="email" name="email" required />
        </label>
        <label>
          Vybrat kurz
          <select name="course" defaultValue="" required>
            <option value="" disabled>
              Vyberte kurz
            </option>
            {courseOptions.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
        </label>
        <label className="full-width">
          Poznamka / jmeno ditete (deti)
          <textarea name="note" rows={4} />
        </label>
        <button type="submit" className="primary-button">
          Odeslat
        </button>
      </form>
    </section>
  );
}