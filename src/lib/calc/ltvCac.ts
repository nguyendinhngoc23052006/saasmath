export type LtvCacInput = {
  arpu: number;
  grossMarginPct: number;
  monthlyChurnPct: number;
  cac: number;
};

export type LtvCacResult = {
  ltv: number;
  ratio: number;
  paybackMonths: number;
  health: 'excellent' | 'good' | 'weak' | 'critical';
};

export function ltvCac(input: LtvCacInput): LtvCacResult {
  const arpu = Math.max(0, input.arpu || 0);
  const gm = Math.max(0, Math.min(100, input.grossMarginPct || 0)) / 100;
  const churn = Math.max(0, Math.min(100, input.monthlyChurnPct || 0)) / 100;
  const cac = Math.max(0, input.cac || 0);

  const contribution = arpu * gm;
  const ltv = churn > 0 ? contribution / churn : Infinity;
  const ratio = cac > 0 ? ltv / cac : Infinity;
  const paybackMonths = contribution > 0 ? cac / contribution : Infinity;

  let health: LtvCacResult['health'] = 'critical';
  if (ratio >= 3 && paybackMonths <= 18) health = 'excellent';
  else if (ratio >= 3) health = 'good';
  else if (ratio >= 1) health = 'weak';

  return { ltv, ratio, paybackMonths, health };
}
