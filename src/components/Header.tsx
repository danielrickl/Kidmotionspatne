import { navigation } from '../data';

export function Header(): JSX.Element {
  return (
    <header className="site-header">
      <div className="brand">Kid Motion</div>
      <nav aria-label="Hlavni navigace">
        <ul className="nav-list">
          {navigation.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}