export type BridgeRoundInput = {
  additionalRunwayMonths: number;
  currentMonthlyBurn: number;
  nextPreMoney: number;
  discountPct: number;
  cap?: number;
};

export type BridgeRoundResult = {
  bridgeSize: number;
  effectiveValuation: number;
  conversionPricePerPct: number;
  expectedDilutionPct: number;
  triggeredBy: 'cap' | 'discount' | 'neither';
};

export function bridgeRound(input: BridgeRoundInput): BridgeRoundResult {
  const months = Math.max(0, input.additionalRunwayMonths || 0);
  const burn = Math.max(0, input.currentMonthlyBurn || 0);
  const nextPre = Math.max(0, input.nextPreMoney || 0);
  const disc = Math.max(0, Math.min(99, input.discountPct || 0)) / 100;
  const cap = input.cap && input.cap > 0 ? input.cap : Infinity;

  const bridgeSize = months * burn;

  const discountedValuation = nextPre * (1 - disc);
  const effectiveValuation = Math.min(cap, discountedValuation);

  let triggeredBy: BridgeRoundResult['triggeredBy'] = 'neither';
  if (effectiveValuation === cap && cap < discountedValuation) triggeredBy = 'cap';
  else if (disc > 0) triggeredBy = 'discount';

  const conversionPricePerPct = effectiveValuation / 100;
  const postMoneyAtConversion = effectiveValuation + bridgeSize;
  const expectedDilutionPct = postMoneyAtConversion > 0 ? (bridgeSize / postMoneyAtConversion) * 100 : 0;

  return {
    bridgeSize,
    effectiveValuation,
    conversionPricePerPct,
    expectedDilutionPct,
    triggeredBy,
  };
}
