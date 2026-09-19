import { navSections } from '../data/sat';

type Props = {
  active: string;
};

export function StickyNav({ active }: Props) {
  return (
    <nav className="sticky-nav" aria-label="SAT sections">
      <ul className="sticky-nav__list">
        {navSections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className={`sticky-nav__link ${active === s.id ? 'sticky-nav__link--active' : ''}`}
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
