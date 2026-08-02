import { describe, it, expect } from 'vitest';
import { runway } from '../../src/lib/calc/runway';

describe('runway', () => {
  it('divides cash by net burn', () => {
    const r = runway({ cash: 1_200_000, monthlyBurn: 100_000 });
    expect(r.months).toBeCloseTo(12);
    expect(r.netBurn).toBe(100_000);
    expect(r.infinite).toBe(false);
  });

  it('subtracts revenue from burn', () => {
    const r = runway({ cash: 500_000, monthlyBurn: 80_000, monthlyRevenue: 30_000 });
    expect(r.netBurn).toBe(50_000);
    expect(r.months).toBeCloseTo(10);
  });

  it('returns Infinity when revenue meets or exceeds burn', () => {
    const r = runway({ cash: 100_000, monthlyBurn: 50_000, monthlyRevenue: 50_000 });
    expect(r.months).toBe(Infinity);
    expect(r.infinite).toBe(true);
    expect(r.zeroDate).toBeNull();
  });

  it('handles zero cash', () => {
    const r = runway({ cash: 0, monthlyBurn: 10_000 });
    expect(r.months).toBe(0);
  });

  it('coerces negative inputs to zero', () => {
    const r = runway({ cash: -500, monthlyBurn: -100, monthlyRevenue: -50 });
    expect(r.netBurn).toBe(0);
    expect(r.months).toBe(0);
  });

  it('computes a zero date offset by months', () => {
    const now = new Date('2026-01-15T00:00:00Z');
    const r = runway({ cash: 300_000, monthlyBurn: 100_000 }, now);
    expect(r.zeroDate?.getUTCFullYear()).toBe(2026);
    expect(r.zeroDate?.getUTCMonth()).toBe(3);
  });
});
