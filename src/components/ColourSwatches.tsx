import type { ColourOption } from '../data/sat';

type Props = {
  title: string;
  options: ColourOption[];
  selected?: string | null;
  onSelect?: (label: string) => void;
};

export function ColourSwatches({ title, options, selected, onSelect }: Props) {
  return (
    <div className="colour-group">
      <h4 className="colour-group__title">{title}</h4>
      <div className="colour-swatches" role="list">
        {options.map((opt) => (
          <button
            key={opt.label}
            type="button"
            role="listitem"
            className={`swatch ${selected === opt.label ? 'swatch--selected' : ''}`}
            onClick={() => onSelect?.(opt.label)}
            style={{ ['--swatch' as string]: opt.swatch }}
          >
            <span className="swatch__dot" aria-hidden />
            <span className="swatch__label">{opt.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
