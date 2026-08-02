export type RuleOf40Input = {
  growthPct: number;
  profitMarginPct: number;
};

export type RuleOf40Result = {
  score: number;
  passes: boolean;
  gap: number;
  band: 'below' | 'meets' | 'exceeds' | 'elite';
};

export function ruleOf40(input: RuleOf40Input): RuleOf40Result {
  const g = input.growthPct || 0;
  const m = input.profitMarginPct || 0;
  const score = g + m;
  const passes = score >= 40;
  let band: RuleOf40Result['band'] = 'below';
  if (score >= 60) band = 'elite';
  else if (score >= 50) band = 'exceeds';
  else if (score >= 40) band = 'meets';
  return { score, passes, gap: 40 - score, band };
}

export function ruleOf40FromRevenue(revenue: number, revenuePrev: number, ebitda: number): RuleOf40Result {
  const g = revenuePrev > 0 ? ((revenue - revenuePrev) / revenuePrev) * 100 : 0;
  const m = revenue > 0 ? (ebitda / revenue) * 100 : 0;
  return ruleOf40({ growthPct: g, profitMarginPct: m });
}
