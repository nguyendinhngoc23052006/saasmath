import { useMemo } from 'react';
import { runway } from '@/lib/calc/runway';
import { money, months as fmtMonths, isoDate } from '@/lib/format';
import { Field, Stat } from './Field';
import { useUrlState } from './useUrlState';
import { CopyLink } from '../CopyLink';

const DEFAULTS = { cash: 500_000, burn: 60_000, revenue: 15_000 };

export default function RunwayCalculator() {
  const [s, patch] = useUrlState(DEFAULTS);
  const r = useMemo(
    () => runway({ cash: s.cash, monthlyBurn: s.burn, monthlyRevenue: s.revenue }),
    [s.cash, s.burn, s.revenue]
  );

  return (
    <div className="calc-card">
      <div className="grid gap-4 sm:grid-cols-3">
        <Field id="cash" label="Cash on hand" value={s.cash} onChange={(v) => patch({ cash: v })} prefix="$" step={10000} min={0} />
        <Field id="burn" label="Monthly burn" value={s.burn} onChange={(v) => patch({ burn: v })} prefix="$" step={1000} min={0} />
        <Field id="revenue" label="Monthly revenue" value={s.revenue} onChange={(v) => patch({ revenue: v })} prefix="$" step={1000} min={0} hint="Optional" />
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <Stat
          label="Net burn"
          value={money(r.netBurn)}
          hint="Burn minus revenue"
          tone={r.netBurn <= 0 ? 'good' : 'default'}
        />
        <Stat
          label="Runway"
          value={r.infinite ? 'Profitable' : fmtMonths(r.months)}
          hint={r.infinite ? 'Revenue covers burn' : 'At current net burn'}
          tone={r.infinite ? 'good' : r.months < 6 ? 'bad' : r.months < 12 ? 'warn' : 'default'}
        />
        <Stat
          label="Zero date"
          value={r.zeroDate ? isoDate(r.zeroDate) : '—'}
          hint={r.zeroDate ? 'When cash reaches zero' : 'N/A'}
        />
      </div>

      <div className="mt-4 flex items-center justify-between text-xs text-ink-500">
        <span>Rule of thumb: raise when runway drops below 9 months.</span>
        <CopyLink />
      </div>
    </div>
  );
}
