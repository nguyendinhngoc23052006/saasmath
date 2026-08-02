import { describe, it, expect } from 'vitest';
import { optionValue } from '../../src/lib/calc/optionValue';

describe('optionValue', () => {
  it('computes paper value as shares times spread', () => {
    const r = optionValue({
      strike: 1, fairMarketValue: 5, sharesGranted: 10_000, vestingYears: 4,
      exitValuation: 100_000_000, futureDilutionPct: 30, sharesOutstanding: 10_000_000,
    });
    expect(r.paperValueToday).toBe(40_000);
  });

  it('applies future dilution to exit ownership', () => {
    const r = optionValue({
      strike: 1, fairMarketValue: 5, sharesGranted: 10_000, vestingYears: 4,
      exitValuation: 100_000_000, futureDilutionPct: 50, sharesOutstanding: 10_000_000,
    });
    expect(r.effectiveOwnershipAtExitPct).toBeCloseTo(0.05);
    expect(r.exitValueGross).toBeCloseTo(50_000);
    expect(r.exitValueNetOfStrike).toBeCloseTo(40_000);
  });

  it('returns zero paper value when strike above FMV', () => {
    const r = optionValue({
      strike: 5, fairMarketValue: 3, sharesGranted: 10_000, vestingYears: 4,
      exitValuation: 50_000_000, futureDilutionPct: 20, sharesOutstanding: 5_000_000,
    });
    expect(r.paperValueToday).toBe(0);
  });

  it('divides shares by vesting years', () => {
    const r = optionValue({
      strike: 1, fairMarketValue: 2, sharesGranted: 40_000, vestingYears: 4,
      exitValuation: 10_000_000, futureDilutionPct: 20, sharesOutstanding: 1_000_000,
    });
    expect(r.vestedPerYear).toBe(10_000);
  });

  it('protects against zero outstanding shares', () => {
    const r = optionValue({
      strike: 1, fairMarketValue: 2, sharesGranted: 1000, vestingYears: 4,
      exitValuation: 10_000_000, futureDilutionPct: 20, sharesOutstanding: 0,
    });
    expect(Number.isFinite(r.effectiveOwnershipAtExitPct)).toBe(true);
  });

  it('handles zero exit valuation', () => {
    const r = optionValue({
      strike: 1, fairMarketValue: 2, sharesGranted: 1000, vestingYears: 4,
      exitValuation: 0, futureDilutionPct: 20, sharesOutstanding: 1_000_000,
    });
    expect(r.exitValueGross).toBe(0);
    expect(r.exitValueNetOfStrike).toBe(-1000);
  });
});
