import type { ScaleOption } from '../data/sat';

type Props = {
  options: ScaleOption[];
  selected?: string | null;
  onSelect?: (label: string) => void;
  accent?: 'default' | 'fault';
};

export function ScaleChips({ options, selected, onSelect, accent = 'default' }: Props) {
  return (
    <div className="scale-chips" role="list">
      {options.map((opt) => {
        const key = opt.note ? `${opt.label}::${opt.note}` : opt.label;
        const isSelected = selected === key || selected === opt.label;
        const isFault = opt.note === 'faulty' || opt.label === 'faulty' || opt.label === 'unclean' || opt.label === 'tired' || opt.label === 'past its best' || opt.label === 'poor';
        return (
          <button
            key={key}
            type="button"
            role="listitem"
            className={`chip ${isSelected ? 'chip--selected' : ''} ${isFault && accent === 'fault' ? 'chip--fault' : ''} ${opt.note ? 'chip--noted' : ''}`}
            onClick={() => onSelect?.(key)}
            title={opt.note}
          >
            <span className="chip__label">{opt.label}</span>
            {opt.note && <span className="chip__note">{opt.note}</span>}
          </button>
        );
      })}
    </div>
  );
}
