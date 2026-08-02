export type QuickRatioInput = {
  newMrr: number;
  expansionMrr: number;
  churnedMrr: number;
  contractionMrr: number;
};

export type QuickRatioResult = {
  quickRatio: number;
  netNewMrr: number;
  health: 'excellent' | 'good' | 'weak' | 'critical';
};

export function quickRatio(input: QuickRatioInput): QuickRatioResult {
  const gained = Math.max(0, input.newMrr || 0) + Math.max(0, input.expansionMrr || 0);
  const lost = Math.max(0, input.churnedMrr || 0) + Math.max(0, input.contractionMrr || 0);
  const netNewMrr = gained - lost;
  const qr = lost > 0 ? gained / lost : Infinity;

  let health: QuickRatioResult['health'] = 'critical';
  if (qr >= 4) health = 'excellent';
  else if (qr >= 2) health = 'good';
  else if (qr >= 1) health = 'weak';

  return { quickRatio: qr, netNewMrr, health };
}
