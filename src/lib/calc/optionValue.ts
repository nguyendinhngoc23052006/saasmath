export type OptionValueInput = {
  strike: number;
  fairMarketValue: number;
  sharesGranted: number;
  vestingYears: number;
  exitValuation: number;
  futureDilutionPct: number;
  sharesOutstanding: number;
};

export type OptionValueResult = {
  paperValueToday: number;
  exitValueGross: number;
  exitValueNetOfStrike: number;
  effectiveOwnershipAtExitPct: number;
  vestedPerYear: number;
};

export function optionValue(input: OptionValueInput): OptionValueResult {
  const shares = Math.max(0, input.sharesGranted || 0);
  const strike = Math.max(0, input.strike || 0);
  const fmv = Math.max(0, input.fairMarketValue || 0);
  const years = Math.max(1, input.vestingYears || 4);
  const exitVal = Math.max(0, input.exitValuation || 0);
  const dil = Math.max(0, Math.min(100, input.futureDilutionPct || 0)) / 100;
  const outstanding = Math.max(1, input.sharesOutstanding || 1);

  const paperValueToday = shares * Math.max(0, fmv - strike);
  const effectiveOwnershipAtExit = (shares / outstanding) * (1 - dil);
  const exitValueGross = exitVal * effectiveOwnershipAtExit;
  const exitValueNetOfStrike = exitValueGross - shares * strike;

  return {
    paperValueToday,
    exitValueGross,
    exitValueNetOfStrike,
    effectiveOwnershipAtExitPct: effectiveOwnershipAtExit * 100,
    vestedPerYear: shares / years,
  };
}
