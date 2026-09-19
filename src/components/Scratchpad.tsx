import { useEffect, useState } from 'react';

const KEY = 'wset-sat-scratchpad';

export function Scratchpad() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState(() => {
    try {
      return localStorage.getItem(KEY) ?? '';
    } catch {
      return '';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(KEY, text);
    } catch {
      /* ignore */
    }
  }, [text]);

  return (
    <div className={`scratchpad ${open ? 'scratchpad--open' : ''}`}>
      <button type="button" className="scratchpad__toggle" onClick={() => setOpen((o) => !o)}>
        {open ? 'Close notes' : 'Tasting notes'}
      </button>
      {open && (
        <div className="scratchpad__panel">
          <label className="scratchpad__label" htmlFor="scratch">
            Local scratchpad (saved on this device)
          </label>
          <textarea
            id="scratch"
            className="scratchpad__textarea"
            rows={8}
            placeholder="Wine / vintage / producer…&#10;Appearance…&#10;Nose…&#10;Palate…&#10;Conclusions…"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="button" className="link-btn" onClick={() => setText('')}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
}
