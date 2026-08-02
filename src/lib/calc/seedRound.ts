export type SeedRoundInput = {
  targetRunwayMonths: number;
  teamSize: number;
  avgSalary: number;
  nonPersonnelMonthly: number;
  overheadMultiplier?: number;
};

export type SeedRoundResult = {
  monthlyBurn: number;
  raiseNeeded: number;
  valuationLow: number;
  valuationHigh: number;
  dilutionAtLowPct: number;
  dilutionAtHighPct: number;
};

export function seedRound(input: SeedRoundInput): SeedRoundResult {
  const runway = Math.max(1, input.targetRunwayMonths || 18);
  const team = Math.max(0, input.teamSize || 0);
  const salary = Math.max(0, input.avgSalary || 0);
  const nonPer = Math.max(0, input.nonPersonnelMonthly || 0);
  const overhead = input.overheadMultiplier ?? 1.3;

  const personnelMonthly = (team * salary * overhead) / 12;
  const monthlyBurn = personnelMonthly + nonPer;
  const raiseNeeded = monthlyBurn * runway;

  const dilLow = 0.15;
  const dilHigh = 0.25;
  const valuationLow = raiseNeeded > 0 ? raiseNeeded / dilHigh - raiseNeeded : 0;
  const valuationHigh = raiseNeeded > 0 ? raiseNeeded / dilLow - raiseNeeded : 0;

  return {
    monthlyBurn,
    raiseNeeded,
    valuationLow,
    valuationHigh,
    dilutionAtLowPct: dilLow * 100,
    dilutionAtHighPct: dilHigh * 100,
  };
}
