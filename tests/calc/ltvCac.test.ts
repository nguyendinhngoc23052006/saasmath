import { describe, it, expect } from 'vitest';
import { ltvCac } from '../../src/lib/calc/ltvCac';

describe('ltvCac', () => {
  it('computes LTV from contribution margin and churn', () => {
    const r = ltvCac({ arpu: 100, grossMarginPct: 80, monthlyChurnPct: 2, cac: 300 });
    expect(r.ltv).toBeCloseTo(4000);
    expect(r.ratio).toBeCloseTo(13.33, 1);
  });

  it('marks a 3:1 ratio at reasonable payback as excellent', () => {
    const r = ltvCac({ arpu: 100, grossMarginPct: 80, monthlyChurnPct: 2.7, cac: 900 });
    expect(r.ratio).toBeGreaterThanOrEqual(3);
    expect(r.health).toBe('excellent');
  });

  it('flags weak ratio', () => {
    const r = ltvCac({ arpu: 50, grossMarginPct: 60, monthlyChurnPct: 5, cac: 800 });
    expect(r.ratio).toBeLessThan(3);
    expect(['weak', 'critical']).toContain(r.health);
  });

  it('returns Infinity LTV at zero churn', () => {
    const r = ltvCac({ arpu: 100, grossMarginPct: 80, monthlyChurnPct: 0, cac: 300 });
    expect(r.ltv).toBe(Infinity);
  });

  it('returns Infinity payback with zero contribution', () => {
    const r = ltvCac({ arpu: 0, grossMarginPct: 80, monthlyChurnPct: 3, cac: 200 });
    expect(r.paybackMonths).toBe(Infinity);
  });

  it('clamps out-of-range percentages', () => {
    const r = ltvCac({ arpu: 100, grossMarginPct: 250, monthlyChurnPct: 100, cac: 300 });
    expect(r.ltv).toBeCloseTo(100);
    expect(r.ratio).toBeCloseTo(1 / 3, 2);
  });
});
