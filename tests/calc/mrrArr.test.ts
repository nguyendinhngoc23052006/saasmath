import { describe, it, expect } from 'vitest';
import { mrrArr } from '../../src/lib/calc/mrrArr';

describe('mrrArr', () => {
  it('computes months to target from compound growth', () => {
    const r = mrrArr({ currentMrr: 10_000, targetMrr: 20_000, monthlyGrowthPct: 10 });
    expect(r.monthsToTarget).toBeCloseTo(7.27, 1);
  });

  it('returns 0 months when target already reached', () => {
    const r = mrrArr({ currentMrr: 50_000, targetMrr: 20_000, monthlyGrowthPct: 5 });
    expect(r.monthsToTarget).toBe(0);
  });

  it('returns Infinity with zero growth below target', () => {
    const r = mrrArr({ currentMrr: 10_000, targetMrr: 20_000, monthlyGrowthPct: 0 });
    expect(r.monthsToTarget).toBe(Infinity);
  });

  it('generates a 12-row trajectory', () => {
    const r = mrrArr({ currentMrr: 10_000, targetMrr: 100_000, monthlyGrowthPct: 10 });
    expect(r.trajectory).toHaveLength(12);
    expect(r.trajectory[11].month).toBe(12);
    expect(r.trajectory[11].arr).toBeCloseTo(10_000 * Math.pow(1.1, 12) * 12);
  });

  it('flags T2D3 comparison', () => {
    const r = mrrArr({ currentMrr: 83_333, targetMrr: 200_000, monthlyGrowthPct: 20 });
    expect(['ahead', 'on-track', 'behind']).toContain(r.t2d3Match);
  });

  it('handles zero starting MRR', () => {
    const r = mrrArr({ currentMrr: 0, targetMrr: 10_000, monthlyGrowthPct: 10 });
    expect(r.monthsToTarget).toBe(Infinity);
  });
});
