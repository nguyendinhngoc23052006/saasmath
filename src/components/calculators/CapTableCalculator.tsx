import { useMemo } from 'react';
import { capTable } from '@/lib/calc/capTable';
import { money, pct } from '@/lib/format';
import { Field, Stat } from './Field';
import { useUrlState } from './useUrlState';
import { CopyLink } from '../CopyLink';

const DEFAULTS = { pre: 8_000_000, round: 2_000_000, pool: 10, existing: 100 };

export default function CapTableCalculator() {
  const [s, patch] = useUrlState(DEFAULTS);
  const r = useMemo(
    () => capTable({
      preMoney: s.pre,
      roundSize: s.round,
      optionPoolPct: s.pool,
      existingOwnershipPct: s.existing,
    }),
    [s.pre, s.round, s.pool, s.existing]
  );

  return (
    <div className="calc-card">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        <Field id="pre" label="Pre-money valuation" value={s.pre} onChange={(v) => patch({ pre: v })} prefix="$" step={100000} />
        <Field id="round" label="Round size" value={s.round} onChange={(v) => patch({ round: v })} prefix="$" step={50000} />
        <Field id="pool" label="Option pool top-up" value={s.pool} onChange={(v) => patch({ pool: v })} suffix="%" step={0.5} />
        <Field id="existing" label="Your existing ownership" value={s.existing} onChange={(v) => patch({ existing: v })} suffix="%" step={1} />
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
        <Stat label="Post-money" value={money(r.postMoney)} />
        <Stat label="New investor stake" value={pct(r.newInvestorPct)} />
        <Stat label="Total dilution" value={pct(r.totalDilutionPct)} tone={r.totalDilutionPct > 25 ? 'warn' : 'default'} />
        <Stat label="Your new ownership" value={pct(r.newExistingPct)} tone="good" />
      </div>

      <div className="mt-4 flex items-center justify-between text-xs text-ink-500">
        <span>Option pool top-up before the round means founders bear it. Push some of it post-round when possible.</span>
        <CopyLink />
      </div>
    </div>
  );
}
