import { useMemo } from 'react';
import { seedRound } from '@/lib/calc/seedRound';
import { money, pct } from '@/lib/format';
import { Field, Stat } from './Field';
import { useUrlState } from './useUrlState';
import { CopyLink } from '../CopyLink';

const DEFAULTS = { runway: 18, team: 4, salary: 130_000, nonpers: 8000 };

export default function SeedRoundCalculator() {
  const [s, patch] = useUrlState(DEFAULTS);
  const r = useMemo(
    () => seedRound({
      targetRunwayMonths: s.runway,
      teamSize: s.team,
      avgSalary: s.salary,
      nonPersonnelMonthly: s.nonpers,
    }),
    [s.runway, s.team, s.salary, s.nonpers]
  );

  return (
    <div className="calc-card">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        <Field id="runway" label="Target runway (months)" value={s.runway} onChange={(v) => patch({ runway: v })} step={1} />
        <Field id="team" label="Team size" value={s.team} onChange={(v) => patch({ team: v })} step={1} />
        <Field id="salary" label="Average salary" value={s.salary} onChange={(v) => patch({ salary: v })} prefix="$" step={5000} hint="Fully loaded × 1.3 for taxes and benefits" />
        <Field id="nonpers" label="Non-personnel monthly" value={s.nonpers} onChange={(v) => patch({ nonpers: v })} prefix="$" step={500} />
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
        <Stat label="Monthly burn" value={money(r.monthlyBurn)} />
        <Stat label="Raise needed" value={money(r.raiseNeeded)} tone="good" />
        <Stat label="Valuation (low)" value={money(r.valuationLow)} hint={`At ${pct(r.dilutionAtHighPct, 0)} dilution`} />
        <Stat label="Valuation (high)" value={money(r.valuationHigh)} hint={`At ${pct(r.dilutionAtLowPct, 0)} dilution`} />
      </div>

      <div className="mt-4 flex items-center justify-between text-xs text-ink-500">
        <span>Seed rounds typically sell 15–25% for enough runway to hit a Series A milestone.</span>
        <CopyLink />
      </div>
    </div>
  );
}
