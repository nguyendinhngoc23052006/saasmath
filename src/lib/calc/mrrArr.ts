export type MrrArrInput = {
  currentMrr: number;
  targetMrr: number;
  monthlyGrowthPct: number;
};

export type MrrArrResult = {
  monthsToTarget: number;
  trajectory: { month: number; mrr: number; arr: number }[];
  t2d3Match: 'ahead' | 'on-track' | 'behind';
};

const T2D3 = [1, 2, 4, 12, 36, 108];

export function mrrArr(input: MrrArrInput): MrrArrResult {
  const cur = Math.max(0, input.currentMrr || 0);
  const target = Math.max(0, input.targetMrr || 0);
  const g = Math.max(-99, input.monthlyGrowthPct || 0) / 100;

  let months = Infinity;
  if (cur > 0 && target > cur && g > 0) {
    months = Math.log(target / cur) / Math.log(1 + g);
  } else if (target <= cur) {
    months = 0;
  }

  const trajectory = Array.from({ length: 12 }, (_, i) => {
    const month = i + 1;
    const mrr = cur * Math.pow(1 + g, month);
    return { month, mrr, arr: mrr * 12 };
  });

  const arr12 = cur * Math.pow(1 + g, 12) * 12;
  const startArrM = cur * 12;
  let t2d3Match: MrrArrResult['t2d3Match'] = 'on-track';
  if (startArrM > 0) {
    const yearIdx = Math.min(5, Math.round(Math.log(startArrM / 1_000_000) / Math.log(2)));
    if (yearIdx >= 0 && yearIdx < T2D3.length - 1) {
      const expectedNext = T2D3[yearIdx + 1] * 1_000_000;
      if (arr12 > expectedNext * 1.1) t2d3Match = 'ahead';
      else if (arr12 < expectedNext * 0.8) t2d3Match = 'behind';
    }
  }

  return { monthsToTarget: months, trajectory, t2d3Match };
}
