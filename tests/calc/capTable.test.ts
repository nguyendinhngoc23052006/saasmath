import { describe, it, expect } from 'vitest';
import { capTable } from '../../src/lib/calc/capTable';

describe('capTable', () => {
  it('computes post-money as pre plus round', () => {
    const r = capTable({ preMoney: 8_000_000, roundSize: 2_000_000, optionPoolPct: 0, existingOwnershipPct: 100 });
    expect(r.postMoney).toBe(10_000_000);
    expect(r.newInvestorPct).toBeCloseTo(20);
  });

  it('dilutes existing ownership by round + pool', () => {
    const r = capTable({ preMoney: 8_000_000, roundSize: 2_000_000, optionPoolPct: 10, existingOwnershipPct: 100 });
    expect(r.totalDilutionPct).toBeCloseTo(30);
    expect(r.newExistingPct).toBeCloseTo(70);
  });

  it('handles zero pool expansion', () => {
    const r = capTable({ preMoney: 5_000_000, roundSize: 1_000_000, optionPoolPct: 0, existingOwnershipPct: 60 });
    expect(r.newInvestorPct).toBeCloseTo(16.67, 1);
    expect(r.newExistingPct).toBeCloseTo(60 * (1 - 1 / 6), 1);
  });

  it('handles zero pre-money edge case', () => {
    const r = capTable({ preMoney: 0, roundSize: 1_000_000, optionPoolPct: 10, existingOwnershipPct: 100 });
    expect(r.postMoney).toBe(1_000_000);
    expect(r.newInvestorPct).toBeCloseTo(100);
  });

  it('computes effective price per percent', () => {
    const r = capTable({ preMoney: 8_000_000, roundSize: 2_000_000, optionPoolPct: 0, existingOwnershipPct: 100 });
    expect(r.effectivePricePerPct).toBe(100_000);
  });

  it('clamps out-of-range percentages', () => {
    const r = capTable({ preMoney: 8_000_000, roundSize: 2_000_000, optionPoolPct: 250, existingOwnershipPct: 100 });
    expect(r.optionPoolDilutionPct).toBeLessThanOrEqual(100);
  });
});
