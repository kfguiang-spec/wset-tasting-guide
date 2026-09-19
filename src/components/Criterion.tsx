import type { ReactNode } from 'react';

type Props = {
  title: string;
  hint?: string;
  children: ReactNode;
};

export function Criterion({ title, hint, children }: Props) {
  return (
    <div className="criterion">
      <div className="criterion__head">
        <h3 className="criterion__title">{title}</h3>
        {hint && <p className="criterion__hint">{hint}</p>}
      </div>
      {children}
    </div>
  );
}
