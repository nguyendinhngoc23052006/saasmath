export type BurnRateInput = {
  startingCash: number;
  endingCash: number;
  months: number;
  revenueOverPeriod?: number;
  arr?: number;
};

export type BurnRateResult = {
  netBurn: number;
  grossBurn: number;
  burnMultiple: number | null;
  cashConsumed: number;
};

export function burnRate(input: BurnRateInput): BurnRateResult {
  const start = input.startingCash || 0;
  const end = input.endingCash || 0;
  const months = Math.max(1, input.months || 0);
  const revenue = Math.max(0, input.revenueOverPeriod || 0);

  const cashConsumed = start - end;
  const netBurn = cashConsumed / months;
  const grossBurn = netBurn + revenue / months;

  const netBurnAnnual = netBurn * 12;
  const burnMultiple = input.arr && input.arr > 0 ? netBurnAnnual / input.arr : null;

  return { netBurn, grossBurn, burnMultiple, cashConsumed };
}
