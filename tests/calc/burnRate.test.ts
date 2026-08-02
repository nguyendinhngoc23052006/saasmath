import { describe, it, expect } from 'vitest';
import { burnRate } from '../../src/lib/calc/burnRate';

describe('burnRate', () => {
  it('computes net burn from delta', () => {
    const r = burnRate({ startingCash: 1_000_000, endingCash: 700_000, months: 3 });
    expect(r.netBurn).toBeCloseTo(100_000);
    expect(r.grossBurn).toBeCloseTo(100_000);
  });

  it('adds revenue back for gross burn', () => {
    const r = burnRate({ startingCash: 1_000_000, endingCash: 700_000, months: 3, revenueOverPeriod: 90_000 });
    expect(r.grossBurn).toBeCloseTo(130_000);
    expect(r.netBurn).toBeCloseTo(100_000);
  });

  it('computes burn multiple against ARR', () => {
    const r = burnRate({ startingCash: 1_000_000, endingCash: 900_000, months: 1, arr: 1_200_000 });
    expect(r.burnMultiple).toBeCloseTo(1);
  });

  it('returns null burn multiple with no ARR', () => {
    const r = burnRate({ startingCash: 500_000, endingCash: 400_000, months: 1 });
    expect(r.burnMultiple).toBeNull();
  });

  it('protects against zero months', () => {
    const r = burnRate({ startingCash: 500_000, endingCash: 400_000, months: 0 });
    expect(Number.isFinite(r.netBurn)).toBe(true);
  });

  it('handles cash increase (negative burn)', () => {
    const r = burnRate({ startingCash: 300_000, endingCash: 400_000, months: 2 });
    expect(r.netBurn).toBeCloseTo(-50_000);
  });
});
