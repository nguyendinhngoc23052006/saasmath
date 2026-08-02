import { useMemo } from 'react';
import { optionValue } from '@/lib/calc/optionValue';
import { money, pct, num } from '@/lib/format';
import { Field, Stat } from './Field';
import { useUrlState } from './useUrlState';
import { CopyLink } from '../CopyLink';

const DEFAULTS = {
  strike: 1,
  fmv: 5,
  shares: 10_000,
  vesting: 4,
  exit: 100_000_000,
  dilution: 30,
  outstanding: 10_000_000,
};

export default function OptionValueCalculator() {
  const [s, patch] = useUrlState(DEFAULTS);
  const r = useMemo(
    () => optionValue({
      strike: s.strike,
      fairMarketValue: s.fmv,
      sharesGranted: s.shares,
      vestingYears: s.vesting,
      exitValuation: s.exit,
      futureDilutionPct: s.dilution,
      sharesOutstanding: s.outstanding,
    }),
    [s.strike, s.fmv, s.shares, s.vesting, s.exit, s.dilution, s.outstanding]
  );

  return (
    <div className="calc-card">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        <Field id="strike" label="Strike price" value={s.strike} onChange={(v) => patch({ strike: v })} prefix="$" step={0.01} />
        <Field id="fmv" label="Current 409A / FMV" value={s.fmv} onChange={(v) => patch({ fmv: v })} prefix="$" step={0.01} />
        <Field id="shares" label="Shares granted" value={s.shares} onChange={(v) => patch({ shares: v })} step={100} />
        <Field id="vesting" label="Vesting years" value={s.vesting} onChange={(v) => patch({ vesting: v })} step={1} />
        <Field id="exit" label="Expected exit valuation" value={s.exit} onChange={(v) => patch({ exit: v })} prefix="$" step={1_000_000} />
        <Field id="dilution" label="Future dilution before exit" value={s.dilution} onChange={(v) => patch({ dilution: v })} suffix="%" step={1} />
        <Field id="outstanding" label="Shares outstanding today" value={s.outstanding} onChange={(v) => patch({ outstanding: v })} step={10000} />
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
        <Stat label="Paper value today" value={money(r.paperValueToday)} hint="Shares × (FMV − strike)" />
        <Stat label="Exit ownership" value={pct(r.effectiveOwnershipAtExitPct, 3)} hint="After future dilution" />
        <Stat label="Exit value (gross)" value={money(r.exitValueGross)} />
        <Stat label="Exit value (net of strike)" value={money(r.exitValueNetOfStrike)} tone={r.exitValueNetOfStrike > 0 ? 'good' : 'bad'} />
      </div>

      <div className="mt-2 text-xs text-ink-500">Vested per year: {num(r.vestedPerYear)}</div>

      <div className="mt-4 flex items-center justify-between text-xs text-ink-500">
        <span>Ignores taxes, ISO/NSO treatment, cliffs. Talk to a CPA before exercising.</span>
        <CopyLink />
      </div>
    </div>
  );
}
