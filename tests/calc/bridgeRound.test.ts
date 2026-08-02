import { describe, it, expect } from 'vitest';
import { bridgeRound } from '../../src/lib/calc/bridgeRound';

describe('bridgeRound', () => {
  it('sizes the bridge from runway needed and burn', () => {
    const r = bridgeRound({
      additionalRunwayMonths: 6, currentMonthlyBurn: 80_000,
      nextPreMoney: 20_000_000, discountPct: 20,
    });
    expect(r.bridgeSize).toBe(480_000);
  });

  it('applies discount when no cap', () => {
    const r = bridgeRound({
      additionalRunwayMonths: 6, currentMonthlyBurn: 100_000,
      nextPreMoney: 10_000_000, discountPct: 20,
    });
    expect(r.effectiveValuation).toBe(8_000_000);
    expect(r.triggeredBy).toBe('discount');
  });

  it('cap wins when tighter than discount', () => {
    const r = bridgeRound({
      additionalRunwayMonths: 6, currentMonthlyBurn: 100_000,
      nextPreMoney: 20_000_000, discountPct: 20, cap: 8_000_000,
    });
    expect(r.effectiveValuation).toBe(8_000_000);
    expect(r.triggeredBy).toBe('cap');
  });

  it('discount wins when tighter than cap', () => {
    const r = bridgeRound({
      additionalRunwayMonths: 6, currentMonthlyBurn: 100_000,
      nextPreMoney: 10_000_000, discountPct: 30, cap: 20_000_000,
    });
    expect(r.effectiveValuation).toBe(7_000_000);
    expect(r.triggeredBy).toBe('discount');
  });

  it('computes expected dilution at conversion', () => {
    const r = bridgeRound({
      additionalRunwayMonths: 6, currentMonthlyBurn: 100_000,
      nextPreMoney: 10_000_000, discountPct: 20,
    });
    const expected = (600_000 / (8_000_000 + 600_000)) * 100;
    expect(r.expectedDilutionPct).toBeCloseTo(expected);
  });

  it('handles zero discount and no cap', () => {
    const r = bridgeRound({
      additionalRunwayMonths: 6, currentMonthlyBurn: 100_000,
      nextPreMoney: 10_000_000, discountPct: 0,
    });
    expect(r.effectiveValuation).toBe(10_000_000);
    expect(r.triggeredBy).toBe('neither');
  });
});
