import { locations } from '../data';

export function LocationsSection(): JSX.Element {
  return (
    <section id="kde-a-kdy" className="section" aria-labelledby="lokality-heading">
      <div className="section-heading-wrap">
        <p className="section-kicker">Kde a kdy</p>
        <h2 id="lokality-heading">Lokality a casy jednotlivych kurzu</h2>
      </div>
      <div className="location-grid">
        {locations.map((location) => (
          <article key={location.city} className="card location-card">
            <h3>{location.city}</h3>
            <p className="address">{location.address}</p>
            <ul>
              {location.slots.map((slot) => (
                <li key={slot}>{slot}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}