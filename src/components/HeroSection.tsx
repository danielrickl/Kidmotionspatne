import { hero } from '../data';

export function HeroSection(): JSX.Element {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <p className="hero-overline">{hero.overline}</p>
      <h1 id="hero-heading">{hero.headline}</h1>
      <p className="hero-subheadline">{hero.subheadline}</p>
      <a className="primary-button" href={hero.ctaHref}>
        {hero.ctaLabel}
      </a>
    </section>
  );
}