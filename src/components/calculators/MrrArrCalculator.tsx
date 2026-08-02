import { useMemo } from 'react';
import { mrrArr } from '@/lib/calc/mrrArr';
import { money, months as fmtMonths } from '@/lib/format';
import { Field, Stat } from './Field';
import { useUrlState } from './useUrlState';
import { CopyLink } from '../CopyLink';

const DEFAULTS = { current: 10_000, target: 100_000, growth: 10 };

export default function MrrArrCalculator() {
  const [s, patch] = useUrlState(DEFAULTS);
  const r = useMemo(
    () => mrrArr({ currentMrr: s.current, targetMrr: s.target, monthlyGrowthPct: s.growth }),
    [s.current, s.target, s.growth]
  );

  const tone = r.t2d3Match === 'ahead' ? 'good' : r.t2d3Match === 'behind' ? 'warn' : 'default';

  return (
    <div className="calc-card">
      <div className="grid gap-4 sm:grid-cols-3">
        <Field id="current" label="Current MRR" value={s.current} onChange={(v) => patch({ current: v })} prefix="$" step={1000} />
        <Field id="target" label="Target MRR" value={s.target} onChange={(v) => patch({ target: v })} prefix="$" step={1000} />
        <Field id="growth" label="Monthly growth" value={s.growth} onChange={(v) => patch({ growth: v })} suffix="%" step={0.5} />
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <Stat label="Months to target" value={Number.isFinite(r.monthsToTarget) ? fmtMonths(r.monthsToTarget) : 'Never at this rate'} />
        <Stat label="12-mo ARR vs T2D3" value={r.t2d3Match} hint="Triple, triple, double, double, double after $1M ARR" tone={tone} />
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-ink-500 border-b border-ink-200">
              <th className="py-2 pr-3">Month</th>
              <th className="py-2 pr-3">MRR</th>
              <th className="py-2">ARR</th>
            </tr>
          </thead>
          <tbody>
            {r.trajectory.map((row) => (
              <tr key={row.month} className="border-b border-ink-100">
                <td className="py-1.5 pr-3">{row.month}</td>
                <td className="py-1.5 pr-3">{money(row.mrr)}</td>
                <td className="py-1.5">{money(row.arr)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-center justify-between text-xs text-ink-500">
        <span>10% MoM compounds to 3.1x in a year. 20% MoM compounds to 8.9x.</span>
        <CopyLink />
      </div>
    </div>
  );
}
