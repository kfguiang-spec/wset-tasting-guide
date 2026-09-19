import { useMemo, useState } from 'react';
import { vocabulary, type VocabFamily } from '../data/sat';

const categoryLabel: Record<VocabFamily['category'], string> = {
  primary: 'Primary',
  secondary: 'Secondary',
  tertiary: 'Tertiary',
};

type Props = {
  title?: string;
};

export function Vocabulary({ title = 'Aroma & flavour characteristics' }: Props) {
  const [query, setQuery] = useState('');
  const [openIds, setOpenIds] = useState<Set<string>>(() => new Set(vocabulary.map((v) => v.id)));
  const [filter, setFilter] = useState<'all' | VocabFamily['category']>('all');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return vocabulary
      .filter((f) => filter === 'all' || f.category === filter)
      .map((f) => {
        if (!q) return f;
        const nameHit = f.name.toLowerCase().includes(q);
        const descs = f.descriptors.filter((d) => d.toLowerCase().includes(q));
        if (nameHit) return f;
        if (descs.length) return { ...f, descriptors: descs };
        return null;
      })
      .filter(Boolean) as VocabFamily[];
  }, [query, filter]);

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const expandAll = () => setOpenIds(new Set(vocabulary.map((v) => v.id)));
  const collapseAll = () => setOpenIds(new Set());

  return (
    <div className="vocab">
      <div className="vocab__toolbar">
        <h3 className="criterion__title">{title}</h3>
        <input
          type="search"
          className="vocab__search"
          placeholder="Search descriptors…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search aroma and flavour vocabulary"
        />
        <div className="vocab__filters">
          {(['all', 'primary', 'secondary', 'tertiary'] as const).map((c) => (
            <button
              key={c}
              type="button"
              className={`filter-btn ${filter === c ? 'filter-btn--active' : ''}`}
              onClick={() => setFilter(c)}
            >
              {c === 'all' ? 'All' : categoryLabel[c]}
            </button>
          ))}
        </div>
        <div className="vocab__actions">
          <button type="button" className="link-btn" onClick={expandAll}>
            Expand all
          </button>
          <button type="button" className="link-btn" onClick={collapseAll}>
            Collapse all
          </button>
        </div>
      </div>

      <div className="vocab__list">
        {filtered.length === 0 && <p className="vocab__empty">No matches.</p>}
        {filtered.map((family) => {
          const open = openIds.has(family.id);
          return (
            <div key={family.id} className={`vocab-family vocab-family--${family.category}`}>
              <button
                type="button"
                className="vocab-family__head"
                onClick={() => toggle(family.id)}
                aria-expanded={open}
              >
                <span className="vocab-family__cat">{categoryLabel[family.category]}</span>
                <span className="vocab-family__name">{family.name}</span>
                <span className="vocab-family__chev" aria-hidden>
                  {open ? '−' : '+'}
                </span>
              </button>
              {open && (
                <div className="vocab-family__body">
                  {family.descriptors.map((d) => (
                    <span key={d} className="desc-chip">
                      {d}
                    </span>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
