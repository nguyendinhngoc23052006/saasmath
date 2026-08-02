import { useMemo } from 'react';
import { burnRate } from '@/lib/calc/burnRate';
import { money, ratio } from '@/lib/format';
import { Field, Stat } from './Field';
import { useUrlState } from './useUrlState';
import { CopyLink } from '../CopyLink';

const DEFAULTS = { start: 1_000_000, end: 700_000, months: 3, revenue: 90_000, arr: 360_000 };

export default function BurnRateCalculator() {
  const [s, patch] = useUrlState(DEFAULTS);
  const r = useMemo(
    () => burnRate({
      startingCash: s.start,
      endingCash: s.end,
      months: s.months,
      revenueOverPeriod: s.revenue,
      arr: s.arr,
    }),
    [s.start, s.end, s.months, s.revenue, s.arr]
  );

  const bmTone = r.burnMultiple == null ? 'default' : r.burnMultiple < 1 ? 'good' : r.burnMultiple < 2 ? 'warn' : 'bad';

  return (
    <div className="calc-card">
      <div className="grid gap-4 sm:grid-cols-3">
        <Field id="start" label="Starting cash" value={s.start} onChange={(v) => patch({ start: v })} prefix="$" step={10000} />
        <Field id="end" label="Ending cash" value={s.end} onChange={(v) => patch({ end: v })} prefix="$" step={10000} />
        <Field id="months" label="Months elapsed" value={s.months} onChange={(v) => patch({ months: v })} step={1} min={1} />
        <Field id="revenue" label="Revenue over period" value={s.revenue} onChange={(v) => patch({ revenue: v })} prefix="$" step={1000} hint="Optional" />
        <Field id="arr" label="Current ARR" value={s.arr} onChange={(v) => patch({ arr: v })} prefix="$" step={10000} hint="Optional. Enables burn multiple." />
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <Stat label="Net burn / mo" value={money(r.netBurn)} />
        <Stat label="Gross burn / mo" value={money(r.grossBurn)} />
        <Stat
          label="Burn multiple"
          value={r.burnMultiple == null ? '—' : ratio(r.burnMultiple)}
          hint={r.burnMultiple == null ? 'Enter ARR' : r.burnMultiple < 1 ? 'Best in class' : r.burnMultiple < 2 ? 'Good' : 'Concerning'}
          tone={bmTone}
        />
      </div>

      <div className="mt-4 flex items-center justify-between text-xs text-ink-500">
        <span>Burn multiple &lt; 1 is elite. &gt; 3 signals a growth-efficiency problem.</span>
        <CopyLink />
      </div>
    </div>
  );
}
