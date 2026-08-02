import { useMemo } from 'react';
import { bridgeRound } from '@/lib/calc/bridgeRound';
import { money, pct } from '@/lib/format';
import { Field, Stat } from './Field';
import { useUrlState } from './useUrlState';
import { CopyLink } from '../CopyLink';

const DEFAULTS = { months: 6, burn: 100_000, nextPre: 20_000_000, disc: 20, cap: 15_000_000 };

export default function BridgeRoundCalculator() {
  const [s, patch] = useUrlState(DEFAULTS);
  const r = useMemo(
    () => bridgeRound({
      additionalRunwayMonths: s.months,
      currentMonthlyBurn: s.burn,
      nextPreMoney: s.nextPre,
      discountPct: s.disc,
      cap: s.cap,
    }),
    [s.months, s.burn, s.nextPre, s.disc, s.cap]
  );

  return (
    <div className="calc-card">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        <Field id="months" label="Additional runway (months)" value={s.months} onChange={(v) => patch({ months: v })} step={1} />
        <Field id="burn" label="Current monthly burn" value={s.burn} onChange={(v) => patch({ burn: v })} prefix="$" step={5000} />
        <Field id="nextPre" label="Expected next pre-money" value={s.nextPre} onChange={(v) => patch({ nextPre: v })} prefix="$" step={500000} />
        <Field id="disc" label="Note discount" value={s.disc} onChange={(v) => patch({ disc: v })} suffix="%" step={1} />
        <Field id="cap" label="Valuation cap" value={s.cap} onChange={(v) => patch({ cap: v })} prefix="$" step={500000} hint="Set 0 for no cap" />
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
        <Stat label="Bridge size" value={money(r.bridgeSize)} />
        <Stat label="Effective valuation" value={money(r.effectiveValuation)} hint={`Set by ${r.triggeredBy}`} />
        <Stat label="Expected dilution" value={pct(r.expectedDilutionPct)} tone={r.expectedDilutionPct > 15 ? 'warn' : 'default'} />
        <Stat label="Price per 1%" value={money(r.conversionPricePerPct)} />
      </div>

      <div className="mt-4 flex items-center justify-between text-xs text-ink-500">
        <span>Whichever gives investors more shares wins: cap price or discounted price.</span>
        <CopyLink />
      </div>
    </div>
  );
}
