import { cancellationRules, discountRules, prices } from '../data';

export function PricingSection(): JSX.Element {
  return (
    <section id="cenik" className="section" aria-labelledby="cenik-heading">
      <div className="section-heading-wrap">
        <p className="section-kicker">Aktualni cenik kurzu</p>
        <h2 id="cenik-heading">Ceny podle dnu, lokaci a typu kurzu</h2>
      </div>

      <div className="pricing-grid">
        {prices.map((price) => (
          <article key={price.dayAndPlace} className="card price-card">
            <h3>{price.dayAndPlace}</h3>
            <p className="address">{price.address}</p>
            <ul>
              {price.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h4>Organizacni informace</h4>
            <ul>
              {price.info.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="policy-grid">
        <article className="card">
          <h3>Slevy na kurzy</h3>
          <ul>
            {discountRules.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ul>
        </article>
        <article className="card">
          <h3>Storno podminky</h3>
          <ul>
            {cancellationRules.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}