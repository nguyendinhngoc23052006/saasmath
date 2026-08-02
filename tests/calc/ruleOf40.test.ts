import { describe, it, expect } from 'vitest';
import { ruleOf40, ruleOf40FromRevenue } from '../../src/lib/calc/ruleOf40';

describe('ruleOf40', () => {
  it('sums growth and margin', () => {
    const r = ruleOf40({ growthPct: 30, profitMarginPct: 15 });
    expect(r.score).toBe(45);
    expect(r.passes).toBe(true);
    expect(r.band).toBe('meets');
  });

  it('fails below 40', () => {
    const r = ruleOf40({ growthPct: 20, profitMarginPct: 10 });
    expect(r.passes).toBe(false);
    expect(r.band).toBe('below');
    expect(r.gap).toBe(10);
  });

  it('marks elite at 60+', () => {
    const r = ruleOf40({ growthPct: 50, profitMarginPct: 20 });
    expect(r.band).toBe('elite');
  });

  it('marks exceeds between 50 and 60', () => {
    const r = ruleOf40({ growthPct: 40, profitMarginPct: 15 });
    expect(r.band).toBe('exceeds');
  });

  it('accepts negative margin', () => {
    const r = ruleOf40({ growthPct: 80, profitMarginPct: -30 });
    expect(r.score).toBe(50);
    expect(r.passes).toBe(true);
  });

  it('computes from revenue and EBITDA', () => {
    const r = ruleOf40FromRevenue(120, 100, 24);
    expect(r.score).toBeCloseTo(40);
    expect(r.passes).toBe(true);
  });
});
