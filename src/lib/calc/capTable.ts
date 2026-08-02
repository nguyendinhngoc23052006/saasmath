export type CapTableInput = {
  preMoney: number;
  roundSize: number;
  optionPoolPct: number;
  existingOwnershipPct: number;
};

export type CapTableResult = {
  postMoney: number;
  newInvestorPct: number;
  optionPoolDilutionPct: number;
  totalDilutionPct: number;
  newExistingPct: number;
  effectivePricePerPct: number;
};

export function capTable(input: CapTableInput): CapTableResult {
  const pre = Math.max(0, input.preMoney || 0);
  const round = Math.max(0, input.roundSize || 0);
  const pool = Math.max(0, Math.min(100, input.optionPoolPct || 0)) / 100;
  const existing = Math.max(0, Math.min(100, input.existingOwnershipPct || 0)) / 100;

  const postMoney = pre + round;
  const newInvestorPct = postMoney > 0 ? round / postMoney : 0;
  const totalDilutionPct = newInvestorPct + pool;
  const newExisting = existing * (1 - totalDilutionPct);
  const effectivePricePerPct = postMoney > 0 ? postMoney / 100 : 0;

  return {
    postMoney,
    newInvestorPct: newInvestorPct * 100,
    optionPoolDilutionPct: pool * 100,
    totalDilutionPct: totalDilutionPct * 100,
    newExistingPct: newExisting * 100,
    effectivePricePerPct,
  };
}
