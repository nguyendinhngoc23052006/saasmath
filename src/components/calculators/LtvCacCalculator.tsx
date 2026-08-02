import { useMemo } from 'react';
import { ltvCac } from '@/lib/calc/ltvCac';
import { money, ratio, months as fmtMonths } from '@/lib/format';
import { Field, Stat } from './Field';
import { useUrlState } from './useUrlState';
import { CopyLink } from '../CopyLink';

const DEFAULTS = { arpu: 100, gm: 80, churn: 3, cac: 400 };

export default function LtvCacCalculator() {
  const [s, patch] = useUrlState(DEFAULTS);
  const r = useMemo(
    () => ltvCac({ arpu: s.arpu, grossMarginPct: s.gm, monthlyChurnPct: s.churn, cac: s.cac }),
    [s.arpu, s.gm, s.churn, s.cac]
  );

  const tone: 'good' | 'warn' | 'bad' | 'default' =
    r.health === 'excellent' ? 'good' : r.health === 'good' ? 'good' : r.health === 'weak' ? 'warn' : 'bad';

  return (
    <div className="calc-card">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        <Field id="arpu" label="ARPU / month" value={s.arpu} onChange={(v) => patch({ arpu: v })} prefix="$" step={5} />
        <Field id="gm" label="Gross margin" value={s.gm} onChange={(v) => patch({ gm: v })} suffix="%" step={1} />
        <Field id="churn" label="Monthly churn" value={s.churn} onChange={(v) => patch({ churn: v })} suffix="%" step={0.1} />
        <Field id="cac" label="CAC" value={s.cac} onChange={(v) => patch({ cac: v })} prefix="$" step={10} />
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <Stat label="LTV" value={money(r.ltv)} hint="Gross-margin adjusted" />
        <Stat label="LTV / CAC" value={ratio(r.ratio)} hint="Target: 3x or higher" tone={tone} />
        <Stat label="Payback" value={fmtMonths(r.paybackMonths)} hint="Under 18 months is healthy" tone={r.paybackMonths <= 12 ? 'good' : r.paybackMonths <= 18 ? 'warn' : 'bad'} />
      </div>

      <div className="mt-4 flex items-center justify-between text-xs text-ink-500">
        <span>Skok's rule: 3:1 LTV/CAC with under 12-month payback is where you can scale.</span>
        <CopyLink />
      </div>
    </div>
  );
}
