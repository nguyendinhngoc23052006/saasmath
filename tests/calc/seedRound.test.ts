import { describe, it, expect } from 'vitest';
import { seedRound } from '../../src/lib/calc/seedRound';

describe('seedRound', () => {
  it('computes burn from team, salary, overhead, non-personnel', () => {
    const r = seedRound({ targetRunwayMonths: 18, teamSize: 4, avgSalary: 120_000, nonPersonnelMonthly: 5000 });
    const expected = (4 * 120_000 * 1.3) / 12 + 5000;
    expect(r.monthlyBurn).toBeCloseTo(expected);
  });

  it('scales raise by target runway', () => {
    const r = seedRound({ targetRunwayMonths: 18, teamSize: 4, avgSalary: 120_000, nonPersonnelMonthly: 5000 });
    expect(r.raiseNeeded).toBeCloseTo(r.monthlyBurn * 18);
  });

  it('derives valuation range from 15-25% dilution', () => {
    const r = seedRound({ targetRunwayMonths: 12, teamSize: 3, avgSalary: 100_000, nonPersonnelMonthly: 0 });
    expect(r.dilutionAtLowPct).toBe(15);
    expect(r.dilutionAtHighPct).toBe(25);
    expect(r.valuationLow).toBeLessThan(r.valuationHigh);
  });

  it('supports custom overhead multiplier', () => {
    const r = seedRound({ targetRunwayMonths: 12, teamSize: 2, avgSalary: 60_000, nonPersonnelMonthly: 0, overheadMultiplier: 1.0 });
    expect(r.monthlyBurn).toBeCloseTo(10_000);
  });

  it('handles zero team', () => {
    const r = seedRound({ targetRunwayMonths: 12, teamSize: 0, avgSalary: 0, nonPersonnelMonthly: 3000 });
    expect(r.monthlyBurn).toBe(3000);
    expect(r.raiseNeeded).toBe(36_000);
  });

  it('coerces bad runway inputs', () => {
    const r = seedRound({ targetRunwayMonths: -5, teamSize: 2, avgSalary: 100_000, nonPersonnelMonthly: 0 });
    expect(r.raiseNeeded).toBeGreaterThan(0);
  });
});
