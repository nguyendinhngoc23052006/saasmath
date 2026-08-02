export type RunwayInput = {
  cash: number;
  monthlyBurn: number;
  monthlyRevenue?: number;
};

export type RunwayResult = {
  netBurn: number;
  months: number;
  infinite: boolean;
  zeroDate: Date | null;
};

export function runway(input: RunwayInput, now: Date = new Date()): RunwayResult {
  const cash = Math.max(0, input.cash || 0);
  const burn = Math.max(0, input.monthlyBurn || 0);
  const rev = Math.max(0, input.monthlyRevenue || 0);
  const netBurn = burn - rev;

  if (cash === 0) {
    return { netBurn, months: 0, infinite: false, zeroDate: new Date(now) };
  }
  if (netBurn <= 0) {
    return { netBurn, months: Infinity, infinite: true, zeroDate: null };
  }
  const months = cash / netBurn;
  const zeroDate = new Date(now);
  zeroDate.setMonth(zeroDate.getMonth() + Math.floor(months));
  return { netBurn, months, infinite: false, zeroDate };
}
