import { useMemo } from 'react';
import { ruleOf40 } from '@/lib/calc/ruleOf40';
import { Field, Stat } from './Field';
import { useUrlState } from './useUrlState';
import { CopyLink } from '../CopyLink';

const DEFAULTS = { growth: 40, margin: 10 };

export default function RuleOf40Calculator() {
  const [s, patch] = useUrlState(DEFAULTS);
  const r = useMemo(
    () => ruleOf40({ growthPct: s.growth, profitMarginPct: s.margin }),
    [s.growth, s.margin]
  );

  const tone: 'good' | 'warn' | 'bad' | 'default' =
    r.band === 'elite' || r.band === 'exceeds' ? 'good' : r.band === 'meets' ? 'default' : 'bad';

  return (
    <div className="calc-card">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="growth" label="YoY revenue growth" value={s.growth} onChange={(v) => patch({ growth: v })} suffix="%" step={1} />
        <Field id="margin" label="Profit margin (EBITDA or FCF)" value={s.margin} onChange={(v) => patch({ margin: v })} suffix="%" step={1} />
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <Stat label="Rule of 40 score" value={`${r.score.toFixed(0)}`} tone={tone} />
        <Stat label="Verdict" value={r.passes ? 'Passes' : `Below by ${r.gap.toFixed(0)}`} tone={r.passes ? 'good' : 'bad'} />
        <Stat label="Band" value={r.band} tone={tone} />
      </div>

      <div className="mt-4 flex items-center justify-between text-xs text-ink-500">
        <span>Public SaaS median hovers 30–40. Brad Feld, 2015.</span>
        <CopyLink />
      </div>
    </div>
  );
}
