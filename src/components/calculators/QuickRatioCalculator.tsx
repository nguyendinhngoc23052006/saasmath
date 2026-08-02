import { useMemo } from 'react';
import { quickRatio } from '@/lib/calc/quickRatio';
import { money, ratio } from '@/lib/format';
import { Field, Stat } from './Field';
import { useUrlState } from './useUrlState';
import { CopyLink } from '../CopyLink';

const DEFAULTS = { newMrr: 8000, exp: 2000, churn: 1500, contract: 500 };

export default function QuickRatioCalculator() {
  const [s, patch] = useUrlState(DEFAULTS);
  const r = useMemo(
    () => quickRatio({ newMrr: s.newMrr, expansionMrr: s.exp, churnedMrr: s.churn, contractionMrr: s.contract }),
    [s.newMrr, s.exp, s.churn, s.contract]
  );

  const tone: 'good' | 'warn' | 'bad' | 'default' =
    r.health === 'excellent' ? 'good' : r.health === 'good' ? 'good' : r.health === 'weak' ? 'warn' : 'bad';

  return (
    <div className="calc-card">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        <Field id="newMrr" label="New MRR" value={s.newMrr} onChange={(v) => patch({ newMrr: v })} prefix="$" step={500} />
        <Field id="exp" label="Expansion MRR" value={s.exp} onChange={(v) => patch({ exp: v })} prefix="$" step={500} />
        <Field id="churn" label="Churned MRR" value={s.churn} onChange={(v) => patch({ churn: v })} prefix="$" step={500} />
        <Field id="contract" label="Contraction MRR" value={s.contract} onChange={(v) => patch({ contract: v })} prefix="$" step={500} />
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <Stat label="Quick ratio" value={Number.isFinite(r.quickRatio) ? ratio(r.quickRatio) : '∞'} tone={tone} />
        <Stat label="Net new MRR" value={money(r.netNewMrr)} tone={r.netNewMrr >= 0 ? 'good' : 'bad'} />
        <Stat label="Health" value={r.health} tone={tone} />
      </div>

      <div className="mt-4 flex items-center justify-between text-xs text-ink-500">
        <span>Bands: &gt;4 excellent, 2–4 good, &lt;2 bad. Mamoon Hamid, Social Capital.</span>
        <CopyLink />
      </div>
    </div>
  );
}
