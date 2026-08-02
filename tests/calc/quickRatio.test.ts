import { describe, it, expect } from 'vitest';
import { quickRatio } from '../../src/lib/calc/quickRatio';

describe('quickRatio', () => {
  it('divides gained by lost MRR', () => {
    const r = quickRatio({ newMrr: 8000, expansionMrr: 2000, churnedMrr: 1500, contractionMrr: 500 });
    expect(r.quickRatio).toBeCloseTo(5);
    expect(r.health).toBe('excellent');
    expect(r.netNewMrr).toBe(8000);
  });

  it('flags good range 2 to 4', () => {
    const r = quickRatio({ newMrr: 3000, expansionMrr: 1000, churnedMrr: 1000, contractionMrr: 500 });
    expect(r.quickRatio).toBeCloseTo(2.67, 1);
    expect(r.health).toBe('good');
  });

  it('flags weak below 2', () => {
    const r = quickRatio({ newMrr: 1000, expansionMrr: 500, churnedMrr: 1000, contractionMrr: 200 });
    expect(r.quickRatio).toBeLessThan(2);
    expect(['weak', 'critical']).toContain(r.health);
  });

  it('returns Infinity with zero losses', () => {
    const r = quickRatio({ newMrr: 5000, expansionMrr: 1000, churnedMrr: 0, contractionMrr: 0 });
    expect(r.quickRatio).toBe(Infinity);
  });

  it('computes negative net new MRR', () => {
    const r = quickRatio({ newMrr: 500, expansionMrr: 100, churnedMrr: 1000, contractionMrr: 500 });
    expect(r.netNewMrr).toBe(-900);
  });

  it('coerces negative inputs', () => {
    const r = quickRatio({ newMrr: -500, expansionMrr: -100, churnedMrr: 1000, contractionMrr: 500 });
    expect(r.quickRatio).toBe(0);
  });
});
