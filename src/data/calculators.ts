export type CalcMeta = {
  slug: string;
  title: string;
  h1: string;
  short: string;
  targetKeyword: string;
};

export const CALCULATORS: CalcMeta[] = [
  { slug: 'runway', title: 'Startup Runway Calculator', h1: 'Startup Runway Calculator', short: 'How many months of cash you have left.', targetKeyword: 'startup runway calculator' },
  { slug: 'burn-rate', title: 'Burn Rate Calculator', h1: 'Burn Rate Calculator', short: 'Gross vs net burn from bank balances.', targetKeyword: 'burn rate calculator' },
  { slug: 'ltv-cac', title: 'LTV / CAC Calculator', h1: 'LTV / CAC Ratio Calculator', short: 'Customer lifetime value against acquisition cost.', targetKeyword: 'ltv cac calculator' },
  { slug: 'mrr-arr-growth', title: 'MRR / ARR Growth Calculator', h1: 'MRR / ARR Growth Calculator', short: 'Months from current MRR to your target.', targetKeyword: 'mrr growth calculator' },
  { slug: 'quick-ratio', title: 'SaaS Quick Ratio Calculator', h1: 'SaaS Quick Ratio Calculator', short: 'How efficiently you replace lost revenue.', targetKeyword: 'saas quick ratio calculator' },
  { slug: 'rule-of-40', title: 'Rule of 40 Calculator', h1: 'Rule of 40 Calculator', short: 'Growth plus margin against the 40 threshold.', targetKeyword: 'rule of 40 calculator' },
  { slug: 'cap-table-dilution', title: 'Cap Table Dilution Calculator', h1: 'Cap Table Dilution Calculator', short: 'Founder dilution after a priced round.', targetKeyword: 'cap table dilution calculator' },
  { slug: 'option-value', title: 'Employee Option Value Calculator', h1: 'Employee Stock Option Value Calculator', short: 'Paper value today and net at exit.', targetKeyword: 'employee stock option calculator startup' },
  { slug: 'seed-round', title: 'Seed Round Calculator', h1: 'Seed Round Sizing Calculator', short: 'How much to raise given team, burn, runway.', targetKeyword: 'seed round size calculator' },
  { slug: 'bridge-round', title: 'Bridge Round Calculator', h1: 'Bridge Round Calculator', short: 'Convertible / SAFE math with cap and discount.', targetKeyword: 'bridge round calculator' },
];

export function calcBySlug(slug: string): CalcMeta | undefined {
  return CALCULATORS.find((c) => c.slug === slug);
}
