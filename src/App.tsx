import { useEffect, useState } from 'react';
import {
  appearance,
  conclusions,
  nose,
  palate,
  navSections,
} from './data/sat';
import { StickyNav } from './components/StickyNav';
import { Criterion } from './components/Criterion';
import { ScaleChips } from './components/ScaleChips';
import { ColourSwatches } from './components/ColourSwatches';
import { Vocabulary } from './components/Vocabulary';
import { Scratchpad } from './components/Scratchpad';
import './App.css';

function App() {
  const [active, setActive] = useState('appearance');
  const [picks, setPicks] = useState<Record<string, string>>({});

  const setPick = (key: string, value: string) => {
    setPicks((prev) => ({
      ...prev,
      [key]: prev[key] === value ? '' : value,
    }));
  };

  useEffect(() => {
    const ids = navSections.map((s) => s.id);

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <div className="app">
      <header className="hero">
        <p className="hero__eyebrow">WSET Level 2 + 3 · Wine</p>
        <h1 className="hero__title">Systematic Approach to Tasting</h1>
        <p className="hero__sub">
          Mobile quick-reference — fullest descriptive scales at a glance (L3 grid with{' '}
          <span className="mono">medium(−)</span> / <span className="mono">medium(+)</span>
          ). Educational use of common public SAT terms; not an official WSET exam document.
        </p>
      </header>

      <StickyNav active={active} />

      <main className="main">
        <section id="appearance" className="section">
          <h2 className="section__title">Appearance</h2>
          <Criterion title="Clarity">
            <ScaleChips
              options={appearance.clarity}
              selected={picks.clarity}
              onSelect={(v) => setPick('clarity', v)}
              accent="fault"
            />
          </Criterion>
          <Criterion title="Intensity">
            <ScaleChips
              options={appearance.intensity}
              selected={picks.intensity}
              onSelect={(v) => setPick('intensity', v)}
            />
          </Criterion>
          <Criterion title="Colour" hint="Tap a swatch to mark your observation">
            <ColourSwatches
              title="White"
              options={appearance.colour.white}
              selected={picks.colour}
              onSelect={(v) => setPick('colour', v)}
            />
            <ColourSwatches
              title="Rosé"
              options={appearance.colour.rose}
              selected={picks.colour}
              onSelect={(v) => setPick('colour', v)}
            />
            <ColourSwatches
              title="Red"
              options={appearance.colour.red}
              selected={picks.colour}
              onSelect={(v) => setPick('colour', v)}
            />
          </Criterion>
          <Criterion
            title="Other observations — bubbles"
            hint="Sparkling wines (optional)"
          >
            <p className="sub-label">Quantity</p>
            <ScaleChips
              options={appearance.other.bubbleQuantity}
              selected={picks.bubbleQty}
              onSelect={(v) => setPick('bubbleQty', v)}
            />
            <p className="sub-label">Size</p>
            <ScaleChips
              options={appearance.other.bubbleSize}
              selected={picks.bubbleSize}
              onSelect={(v) => setPick('bubbleSize', v)}
            />
          </Criterion>
        </section>

        <section id="nose" className="section">
          <h2 className="section__title">Nose</h2>
          <Criterion title="Condition">
            <ScaleChips
              options={nose.condition}
              selected={picks.condition}
              onSelect={(v) => setPick('condition', v)}
              accent="fault"
            />
          </Criterion>
          <Criterion
            title="Intensity"
            hint="L3 five-point scale (L2 often uses light · medium · pronounced only)"
          >
            <ScaleChips
              options={nose.intensity}
              selected={picks.noseIntensity}
              onSelect={(v) => setPick('noseIntensity', v)}
            />
          </Criterion>
          <Vocabulary title="Aroma characteristics" />
          <Criterion title="Development">
            <ScaleChips
              options={nose.development}
              selected={picks.development}
              onSelect={(v) => setPick('development', v)}
              accent="fault"
            />
          </Criterion>
        </section>

        <section id="palate" className="section">
          <h2 className="section__title">Palate</h2>
          <Criterion title="Sweetness">
            <ScaleChips
              options={palate.sweetness}
              selected={picks.sweetness}
              onSelect={(v) => setPick('sweetness', v)}
            />
          </Criterion>
          <Criterion title="Acidity">
            <ScaleChips
              options={palate.acidity}
              selected={picks.acidity}
              onSelect={(v) => setPick('acidity', v)}
            />
          </Criterion>
          <Criterion title="Tannin" hint="Assess for reds / some whites with skin contact">
            <ScaleChips
              options={palate.tannin}
              selected={picks.tannin}
              onSelect={(v) => setPick('tannin', v)}
            />
          </Criterion>
          <Criterion title="Alcohol">
            <ScaleChips
              options={palate.alcohol}
              selected={picks.alcohol}
              onSelect={(v) => setPick('alcohol', v)}
            />
          </Criterion>
          <Criterion title="Body">
            <ScaleChips
              options={palate.body}
              selected={picks.body}
              onSelect={(v) => setPick('body', v)}
            />
          </Criterion>
          <Criterion title="Flavour intensity">
            <ScaleChips
              options={palate.flavourIntensity}
              selected={picks.flavourIntensity}
              onSelect={(v) => setPick('flavourIntensity', v)}
            />
          </Criterion>
          <Vocabulary title="Flavour characteristics" />
          <Criterion title="Finish">
            <ScaleChips
              options={palate.finish}
              selected={picks.finish}
              onSelect={(v) => setPick('finish', v)}
            />
          </Criterion>
          <Criterion
            title="Other observations — mousse"
            hint="Sparkling wines (optional)"
          >
            <ScaleChips
              options={palate.other.mousse}
              selected={picks.mousse}
              onSelect={(v) => setPick('mousse', v)}
            />
          </Criterion>
        </section>

        <section id="conclusions" className="section">
          <h2 className="section__title">Conclusions</h2>
          <Criterion title="Quality level">
            <ScaleChips
              options={conclusions.quality}
              selected={picks.quality}
              onSelect={(v) => setPick('quality', v)}
              accent="fault"
            />
          </Criterion>
          <Criterion title="Readiness for drinking / ageing potential">
            <ScaleChips
              options={conclusions.readiness}
              selected={picks.readiness}
              onSelect={(v) => setPick('readiness', v)}
              accent="fault"
            />
          </Criterion>
        </section>
      </main>

      <Scratchpad />

      <footer className="footer">
        <p>
          Descriptive grid only — no numeric scores. Terms reflect commonly published WSET Level 2
          &amp; 3 SAT wine vocabulary for study (L3 descriptive ranges shown). Study aid; not
          affiliated with WSET Awards.
        </p>
      </footer>
    </div>
  );
}

export default App;
