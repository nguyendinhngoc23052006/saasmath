export function money(value: number, opts: { compact?: boolean; digits?: number } = {}): string {
  if (!Number.isFinite(value)) return '—';
  const { compact = false, digits = 0 } = opts;
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: compact ? 'compact' : 'standard',
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  }).format(value);
}

export function pct(value: number, digits = 1): string {
  if (!Number.isFinite(value)) return '—';
  return `${value.toFixed(digits)}%`;
}

export function ratio(value: number, digits = 2): string {
  if (!Number.isFinite(value)) return '—';
  return `${value.toFixed(digits)}x`;
}

export function months(value: number): string {
  if (!Number.isFinite(value)) return '—';
  if (value >= 12) {
    const years = Math.floor(value / 12);
    const rem = Math.round(value - years * 12);
    return rem === 0 ? `${years} yr` : `${years} yr ${rem} mo`;
  }
  return `${Math.round(value * 10) / 10} mo`;
}

export function num(value: number, digits = 0): string {
  if (!Number.isFinite(value)) return '—';
  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  }).format(value);
}

export function addMonths(base: Date, m: number): Date {
  const d = new Date(base);
  d.setMonth(d.getMonth() + Math.floor(m));
  return d;
}

export function isoDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}
